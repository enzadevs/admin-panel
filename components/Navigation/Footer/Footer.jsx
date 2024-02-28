import Link from "next/link";
import Image from "next/image";
import AlemTilsimatLogo from "public/assets/alem-tilsimat-logo.webp";

export default function Footer() {
  return (
    <footer className="border-t bg-calm-50 flex flex-row items-center gap-4 mt-auto px-4 h-24">
      <span className="text-calm-600 text-lg font-bold flex-row-center">
        <>2024. Admin Panel</>
      </span>
      <Link
        href="https://alemtilsimat.com/#"
        className="bg-calm rounded-lg flex-row-center ml-auto py-2 px-4"
        target="_blank"
      >
        <Image
          src={AlemTilsimatLogo}
          alt="alem tilsimat logo"
          height={30}
          width={"auto"}
          sizes="25vw"
          style={{ objectFit: "contain" }}
        ></Image>
        <p className="text-white text-sm">Älem Tilsimat</p>
      </Link>
    </footer>
  );
}
