import ProtectedRoute from "utils/ProtectedRoute";
import SideBar from "components/Navigation/SideBar/SideBar";

export default function HomeLayout({ children }) {
  return (
    <SideBar>
      <ProtectedRoute>{children}</ProtectedRoute>
    </SideBar>
  );
}
