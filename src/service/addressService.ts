
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "./api";





const fetchList = async () => {
  const response = await api.get("/address/list")

  return response.data
}

const fetchDelete = async (id: string) => {
    const response = await api.delete(`address/${id}`);
    return response.data;
};



export function useListAddress(){
   return useQuery({
          queryKey: ["address"],
          queryFn: () => fetchList()
      });
}



export function useDeleteAddress() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: fetchDelete,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["address"]
            })
        }
    });
}


