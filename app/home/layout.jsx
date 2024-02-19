"use client";

import dynamic from "next/dynamic";
const ProtectedRoute = dynamic(() => import("utils/ProtectedRoute.jsx"), {
  ssr: false,
});
import SideBar from "components/Navigation/SideBar/SideBar";

export default function HomeLayout({ children }) {
  return (
    <SideBar>
      <ProtectedRoute>{children}</ProtectedRoute>
    </SideBar>
  );
}
