import axios from "axios";
import { useMutation } from "@tanstack/react-query";


const API_URL = "http://localhost:3000/v1"

const fetchlogin = async (value: loginDatas) => {
    const response = await axios.post(
        `${API_URL}/auth/login`,
        value
    );

    return response.data;
};


export function useLogin() {
  return useMutation({
    mutationFn: fetchlogin,
  });
}

const fetchRegister = async (value:RegisterDatas) => {
    const response = await axios.post(
        `${API_URL}/auth/register`,
        value
    )

    return response.data
}



export function useRegister() {
  return useMutation({
    mutationFn: fetchRegister,
  });
}


type loginDatas = {
    email: string,
    password: string
}

type RegisterDatas = {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    cpf: string,
    password: string
}