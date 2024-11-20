"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
import { useCartStore } from "@/hooks/useCartStore";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  const { cart, counter, getCart } = useCartStore();

  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setSearchOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 absolute right-12">
      <Image
        src="/profile.svg"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        // onClick={login}
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/profile">Profile</Link>
          <div className="mt-2 cursor-pointer" >
            {isLoading ? "Logging out" : "Logout"}
          </div>
        </div>
      )}
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image src="/cart.svg" alt="" width={28} height={28} />
        <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full text-white text-sm flex items-center justify-center">
          {counter}
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
