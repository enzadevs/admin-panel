import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/logo_only_transparent.png";

export default function BrandLogo() {
  return (
    <Link
      href="/home"
      className="border-b border-light shadow-sm flex-row-center justify-center gap-2 h-14"
    >
      <Image
        src={Logo}
        alt="e-commerce tools logo image"
        height={32}
        width={32}
        sizes="33"
      ></Image>
      <p className="text-lg">Admin Panel</p>
    </Link>
  );
}
