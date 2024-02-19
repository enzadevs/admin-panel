import { useRouter } from "next/navigation";
import { UseAdminData } from "./UseAdminData";

export default function ProtectedRoute({ children }) {
  const admin = UseAdminData((state) => state.admin);
  const router = useRouter();

  if (!admin) {
    router.push("/");
    return null;
  }

  return children;
}
