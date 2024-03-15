import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/logo_only_transparent.png";

export default function BrandLogo() {
  return (
    <Link href="/home" className="bg-mercury shadow-md center gap-2 h-14">
      <Image
        src={Logo}
        alt="admin panel logo"
        height={32}
        width={32}
        sizes="33"
      ></Image>
      <h2 className="text-lg font-bold">Admin Panel</h2>
    </Link>
  );
}
