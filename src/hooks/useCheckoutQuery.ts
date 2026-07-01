import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/v1",
  withCredentials: true,
});

async function getCheckout(checkoutId: string) {
  const { data } = await api.get(`/checkout/${checkoutId}`);
  return data;
}

export function useCheckoutQuery(checkoutId?: string) {
  return useQuery({
    queryKey: ["checkout", checkoutId],
    queryFn: () => getCheckout(checkoutId!),

    enabled: !!checkoutId,

    refetchInterval: (query) =>
      query.state.data?.status === "paid" ? false : 3000,
  });
}