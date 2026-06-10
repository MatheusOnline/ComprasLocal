import { createContext, useContext, useEffect, useState } from "react";


type User = {
    id: string;
    name: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: () => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    async function loadUser() {
        setLoading(!loading)
    }

    useEffect(() => {
        loadUser();
    }, []);

    async function login() {
        await loadUser(); // 🔥 atualiza header depois do login
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}