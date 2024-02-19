import Link from "next/link";
import Image from "next/image";
import { RiMenuUnfoldFill } from "react-icons/ri";
import ProfileDashboard from "./ProfileDashboard";
import Logo from "public/assets/logo_only_transparent.png";

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-light shadow-sm flex-row-center sticky top-0 px-4 h-14 z-10">
      <label
        htmlFor="my-drawer-2"
        className="bg-calm-50 border cursor-pointer rounded-lg center transition hover:border-calm-400 mr-2 h-10 w-10 xl:hidden"
      >
        <RiMenuUnfoldFill className="icons" />
      </label>
      <Link href="/home" className="center h-10 w-10 xl:hidden">
        <Image
          src={Logo}
          alt="e-commerce tools logo image"
          height={32}
          width={32}
          sizes="33"
        ></Image>
      </Link>
      <span className="flex-row-center gap-2 ml-auto h-10 w-fit">
        <ProfileDashboard />
      </span>
    </nav>
  );
}
