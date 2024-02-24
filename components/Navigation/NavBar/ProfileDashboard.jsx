"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { UseAdminData } from "utils/UseAdminData";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineExitToApp } from "react-icons/md";

export default function ProfileDashboard() {
  const admin = UseAdminData((state) => state.admin);
  const removeAdmin = UseAdminData((state) => state.removeAdmin);
  const router = useRouter();

  const firstName = admin?.data?.user?.firstName;

  return (
    <div className="flex-row-center gap-2 h-fit">
      <Link
        href="/home/settings"
        className="button-outline flex-row-center gap-2 h-10 px-4"
      >
        <div className="center">
          <BsPersonCircle className="icons" />
        </div>
        <>{firstName}</>
      </Link>
      <button
        onClick={() => {
          removeAdmin();
          router.push("/");
        }}
        className="button-outline center h-10 w-10"
      >
        <MdOutlineExitToApp className="icons" />
      </button>
    </div>
  );
}
