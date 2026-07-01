import { useEffect } from "react";
import { useAuth } from "./stores/useAuth";
import { useCartStore } from "./stores/cartStore";

export function AppInitializer() {
  const { user } = useAuth();
  const { getCart } = useCartStore();

  useEffect(() => {
    if (user) {
      getCart();
    }
  }, [user, getCart]);

  return null;
}