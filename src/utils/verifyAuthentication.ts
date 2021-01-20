import { toast } from "react-toastify";

export function verifyAuthentication(err: number) {
  if (err === 401) {
    localStorage.removeItem("_id");
    localStorage.removeItem("token");
  } else {
    toast.info("Erro");
  }
}
