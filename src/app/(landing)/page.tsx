import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Cabeçalho.svg"
import { nunito } from "@/utils/fonts";
import { IconPlus } from "@tabler/icons-react";

export default function Home() {
  return (
      <div className={`${nunito.className} w-full flex items-center justify-center`}>
        <div className="flex flex-col items-center">
          <div className="w-[350px] h-[70px] relative" >
            <Image src={logo} alt="Poupixel" fill/>
          </div>
          <p className="text-lg">Finanças pessoais com desafios!</p>
          <Link href="/home">
            <button className="flex rounded-md border border-green-900 p-2 bg-lime-600 items-center hover:bg-lime-500
            ease-in duration-100 active:bg-lime-600 mt-4">
              <IconPlus height={20} /><span>Criar Nova Meta</span>
            </button>
          </Link>
        </div>
      </div>
  );
}
