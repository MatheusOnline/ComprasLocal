import { useMutation } from "@tanstack/react-query";
import { api } from "../service/api";

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