import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../service/api";

/* =========================
   TYPES
========================= */

interface CardPaymentData {
  checkout_id: string;
  cardToken: string;
  payment_method_id: string;
}

/* =========================
   GET PAYMENT DATA
========================= */

const fetchGetPaymentData = async (checkout_id: string) => {
  const { data } = await api.get(`/payment/${checkout_id}`);

  return data;
};

/* =========================
   PIX
========================= */

const fetchPixData = async (checkout_id: string) => {
  const { data } = await api.post("/payment/pix", {
    checkout_id,
  });

  return data;
};

/* =========================
   CARD
========================= */

const fetchCardData = async ({
  checkout_id,
  cardToken,
  payment_method_id
}: CardPaymentData) => {
  const { data } = await api.post("/payment/card", {
    checkout_id,
    cardToken,
    payment_method_id
  });

  return data;
};

/* =========================
   HOOKS
========================= */

export function useGetPaymentData(checkout_id: string) {
  return useQuery({
    queryKey: ["payment", checkout_id],
    queryFn: () => fetchGetPaymentData(checkout_id),
    enabled: !!checkout_id,
  });
}

export function usePixGenerate() {
  return useMutation({
    mutationFn: fetchPixData,
  });
}

export function useCardGenerate() {
  return useMutation({
    mutationFn: fetchCardData,
  });
}