import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/v1/payment",
  withCredentials: true,
});

const generatePix = async (checkout_id: string) => {
  const { data } = await api.post("/pix", {
    checkout_id,
  });

  console.log(data)  
  return data;

};

export function usePixGenerate() {
  return useMutation({
    mutationFn: generatePix,
  });
}