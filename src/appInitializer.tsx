import { useEffect } from "react";
import { useMe } from "./service/authService";
import { useAuth } from "./stores/useAuthStore";

export function AppInitializer() {
    const setUser = useAuth((state) => state.setUser);

    const { data, isSuccess } = useMe();

    useEffect(() => {
        if (!isSuccess) return;

        setUser({
            name: data?.data?.name,
            email: data?.data?.email,
            cpf: data?.data?.cpf
        });
    }, [isSuccess, data, setUser]);

    return null;
}