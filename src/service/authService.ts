
import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "./api";




const fetchMe = async () => {
  const response = await api.get("/auth/me")

  return response.data
}

const fetchLogout = async () => {
  const response = await api.post("/auth/logout")

  return response.data
}


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
    const response = await api.post(
        "/auth/register ",
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
    const response = await api.post(
        `/auth/forgotpassword`,{email}
    )

    return response.data
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: fetchForgorPassword,
  });
}


const fetchVerifyCode = async (value:VerifyCode) => {
    const response = await api.post(
        `/auth/verifycode `,
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
    const response = await api.post(
        `/auth/update `,value)

    return response.data
}

export function useCreatePassword() {
  return useMutation({
    mutationFn: fetchCreatePassword,
  });
}

export function useMe(){
   return useQuery({
          queryKey: ["user"],
          queryFn: () => fetchMe()
      });
}

export function useLogout(){
  return useMutation({
    mutationFn: fetchLogout,
  })
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