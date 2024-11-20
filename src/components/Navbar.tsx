import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-primary">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Menu />
        <Link href="/">
        <Image src="/logo.png" alt="" width={150} height={50} />
        </Link>
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="left-12 top-0 h-full flex items-center absolute">
          <Menu/>
        </div>
        {/* CENTER LOGO */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="" width={252} height={82} />
          </Link>
        </div>
        {/* RIGHT */}
        <div className="flex items-center justify-end gap-4 w-auto">
          <NavIcons/>
        </div>
        <SearchBar/>
      </div>
    </div>
  );
};

export default Navbar;
