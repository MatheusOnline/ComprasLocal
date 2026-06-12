import axios from "axios";
import { useMutation } from "@tanstack/react-query";


const API_URL = "http://localhost:3000/v1"

export const api = axios.create({
    baseURL: "http://localhost:3000/v1",
    withCredentials: true
});

const fetchlogin = async (value: loginDatas) => {
    const response = await api.post(
        "/auth/login",
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
        `${API_URL}/auth/register `,
        value
    )

    return response.data
}

export function useRegister() {
  return useMutation({
    mutationFn: fetchRegister,
  });
}


const fetchForgorPassword = async (email:string) => {
    const response = await axios.post(
        `${API_URL}/auth/forgotpassword`,{email}
    )

    return response.data
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: fetchForgorPassword,
  });
}


const fetchVerifyCode = async (value:VerifyCode) => {
    const response = await axios.post(
        `${API_URL}/auth/verifycode `,
        value
    )

    return response.data
}

export function useVerifyCode() {
  return useMutation({
    mutationFn: fetchVerifyCode,
  });
}

const fetchCreatePassword= async (value:CreatePasswordData) => {
    const response = await axios.post(
        `${API_URL}/auth/update `,value)

    return response.data
}

export function useCreatePassword() {
  return useMutation({
    mutationFn: fetchCreatePassword,
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

type VerifyCode = {
  code: string
  recoverToken: string
}

type CreatePasswordData = {
  recoverToken: string
  password: string
}