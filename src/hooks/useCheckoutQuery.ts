import { useQuery } from "@tanstack/react-query";
import { api } from "../service/api";

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