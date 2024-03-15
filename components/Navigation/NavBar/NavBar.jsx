import Link from "next/link";
import Image from "next/image";
import ProfileDashboard from "./ProfileDashboard";
import Logo from "public/assets/logo_only_transparent.png";
import { RiMenuUnfoldFill } from "react-icons/ri";

export default function NavBar() {
  return (
    <nav className="bg-mercury shadow-md flex-row-center sticky top-0 px-4 h-14 z-10">
      <label
        htmlFor="my-drawer-2"
        className="button-outline cursor-pointer center h-10 w-10 xl:hidden"
      >
        <RiMenuUnfoldFill className="icons" />
      </label>
      <Link href="/home" className="center ml-2 h-10 w-10 xl:hidden">
        <Image
          src={Logo}
          alt="e-commerce tools logo image"
          height={32}
          width={32}
          sizes="33"
        ></Image>
      </Link>
      <div className="flex-row-center gap-2 ml-auto h-10 w-fit">
        <ProfileDashboard />
      </div>
    </nav>
  );
}
