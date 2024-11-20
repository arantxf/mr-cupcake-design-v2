"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if(name){
      router.push(`/list?name=${name}`)
    }
  };

  return (
    <form
      className="flex gap-2 bg-gray-100 p-3 rounded-md w-auto"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Buscar..."
        className="flex-1 bg-transparent outline-none px-2 w-24"
      />
      <button className="cursor-pointer">
        <Image src="/search.svg" alt="" width={28} height={28} />
      </button>
    </form>
  );
};

export default SearchBar;
