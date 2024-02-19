import Link from "next/link";
import Image from "next/image";
import AlemTilsimatLogo from "public/assets/alem-tilsimat-logo.webp";

export default function Footer() {
  return (
    <footer className="bg-calm-50 border-t border-light flex flex-row items-center gap-4 mt-auto px-4 h-24">
      <span className="text-calm-600 text-lg font-bold flex-row-center">
        <>2024. Admin Tools Panel</>
      </span>
      <Link
        href="https://alemtilsimat.com/#"
        className="bg-calm-600 rounded-lg flex-row-center ml-auto py-2 px-4"
        target="_blank"
      >
        <Image
          src={AlemTilsimatLogo}
          alt="alem tilsimat logo"
          sizes="50vw"
          priority="true"
          height={26}
          width={30}
        ></Image>
        <p className="text-white text-sm">Älem Tilsimat</p>
      </Link>
    </footer>
  );
}
