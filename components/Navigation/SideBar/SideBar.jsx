import BrandLogo from "../NavBar/BrandLogo";
import SideBarMenu from "./SideBarMenu";
import NavBar from "components/Navigation/NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function SideBar({ children }) {
  return (
    <div className="drawer xl:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-[2]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-calm-50 min-h-full w-72">
          <BrandLogo />
          <SideBarMenu />
        </div>
      </div>
      <div className="drawer-content">
        <div className="flex flex-col">
          <NavBar />
          <main className="p-2 md:p-4 min-h-[85vh]">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
