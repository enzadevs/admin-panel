import Link from "next/link";
import AdsTableContainer from "components/Containers/Tables/AdsTableContainer";
import { TbDeviceDesktopPlus } from "react-icons/tb";

export default function AdsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/home/ads/new"
        className="button-primary flex-row-center justify-center gap-2 px-4 w-full"
      >
        <TbDeviceDesktopPlus className="icons" />
        <>Добавить</>
      </Link>
      <AdsTableContainer />
    </div>
  );
}
