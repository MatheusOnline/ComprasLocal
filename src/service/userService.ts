import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";

type UpdateProps = {
    firstname: string,
    email: string,
    phone: string,
}

const fetchGetUser = async () => {
    const response = await api.get("/user")

    return response.data
}

const fetchUpdateUser = async (data:UpdateProps) => {
    const response = await api.patch("/",
        data
    )

    return response.data
}

export function useGetUser(){
    return useQuery({
        queryKey: ["usera"],
        queryFn: () => fetchGetUser()
    });
} 

export function useUpdateUser(){
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: UpdateProps) => fetchUpdateUser(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["usera"]
            })
        }
    })
}