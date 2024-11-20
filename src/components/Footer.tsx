import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full h-[150px] flex items-center justify-between bg-[#FCF6DB] p-5 text-black">
      {/* Left section with logo */}
      <div className="ml-[60px]">
        <Image
          className="m-1"
          src="/logofooter.png"
          alt="Mr. Cupcake"
          width={172}
          height={130}
        />
      </div>

      {/* Center section with social media icons */}
      <div className="text-center">
        <h3 className="mb-2">Nuestras redes</h3>
        <div className="flex justify-center gap-2 items-center">
          <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
          <Image src="/tiktok.svg" alt="TikTok" width={30} height={30} />
          <Image src="/x.png" alt="X" width={30} height={40} />
          <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
        </div>
      </div>

      {/* Right section with "Sobre nosotros" text */}
      <div className="text-left pb-2">
        <h3 className="mb-4">Sobre nosotros</h3>
        <p className="max-w-[500px] text-sm leading-relaxed text-justify">
          Mr. Cupcake Design es un proyecto de emprendimiento juvenil que pretende combinar tres de las cosas que más nos gustan: la moda, los memes y las magdalenas.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
