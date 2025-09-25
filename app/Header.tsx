import Link from "next/link";
import { SiKofi } from "react-icons/si";
import Image from "next/image";
import Logo from "./logo.png";

export default function Header() {
  return (
    <header
      className={`fixed flex  px-4 items-center justify-between top-6 left-0 right-0 max-w-3xl rounded-full w-full mx-auto p-4 h-16 backdrop-blur-lg bg-neutral-600/20 text-center z-10 `}
    >
      <div className="inline-flex gap-2 items-center">
        <Image
          className="border-2 border-white rounded-full"
          src={Logo}
          alt="Logo"
          width={48}
          height={48}
        />
        <h1 className="font-black text-xl">Filled</h1>
      </div>
      <div className="">
        <Link
          href={
            "https://microsoftedge.microsoft.com/addons/detail/filled-autofill-google-/denpfdcbegfpjleghmceadmklfgfcjep"
          }
        >
          <button className="flex gap-2 items-center border-2 px-4 py-2 rounded-full bg-black hover:bg-neutral-700 cursor-pointer transition">
            <SiKofi />
            Support me on Ko-Fi
          </button>
        </Link>
      </div>
    </header>
  );
}
