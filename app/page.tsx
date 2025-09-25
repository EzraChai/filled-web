import Image from "next/image";
import screenshot from "../public/screenshot.png";
import Link from "next/link";
import { FaFirefox, FaEdge, FaHeart } from "react-icons/fa";

import { BiHeart } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="flex flex-col space-y-4 justify-center items-center w-full">
            <h1 className="text-5xl font-bold">
              Filled - Autofill Google Forms
            </h1>
            <h6>Autofill</h6>
            <div className=" border-2 text-sm px-2 rounded-xl font-medium">
              #Built for <span className="text-blue-300">Productivity</span>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href={
                  "https://addons.mozilla.org/en-US/firefox/addon/filled-autofill-google-forms/"
                }
              >
                <button className="flex gap-2 items-center border-2 px-4 py-2 rounded-2xl bg-black hover:bg-neutral-700 cursor-pointer transition">
                  <FaFirefox />
                  Filled for Firefox
                </button>
              </Link>
              <Link
                href={
                  "https://microsoftedge.microsoft.com/addons/detail/filled-autofill-google-/denpfdcbegfpjleghmceadmklfgfcjep"
                }
              >
                <button className="flex gap-2 items-center border-2 px-4 py-2 rounded-2xl bg-black hover:bg-neutral-700 cursor-pointer transition">
                  <FaEdge />
                  Filled for Edge
                </button>
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg shadow-neutral-500 w-2xl h-full">
            <Image
              className=""
              src={screenshot}
              alt="Screenshot of the extension"
            />
          </div>
          <div className="text-lg max-w-2xl space-y-4 text-neutral-400 text-pretty text-justify">
            <h6 className="text-xl text-neutral-200">What is Filled?</h6>
            <p>
              Filled is a smart, lightweight tool designed to make filling
              Google Forms effortless and efficient. Whether you’re submitting a
              single form or repeatedly filling similar forms, Filled saves you
              time by automatically detecting the form’s fields and entering
              your predefined answers.
            </p>
          </div>
        </main>
      </div>
      <footer className="flex items-baseline justify-center text-sm gap-1 text-neutral-500">
        Made with <FaHeart color="red" /> by{" "}
        <Link
          className="text-blue-300 hover:underline"
          href={"https://ezrachai-links.vercel.app/"}
        >
          ezrachai.
        </Link>
      </footer>
    </>
  );
}
