import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <section className="home flex p-20 flex-col-reverse items-center justify-center gap-10 sm:flex-row sm:mx-40 sm:items-start">
        <div className="content m-3 grid gap-5 sm:mx-30 my-10">
          <h1 className="text-4xl text-center sm:text-left">
            <b>
              Hi, I'm John,<br></br> Creative Technologist
            </b>
          </h1>
          <p className="text-center sm:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-md text-center sm:text-left sm:mx-0 mx-auto 2xl:w-1/4">
            Download Resume
          </Button>
        </div>
        <Image
          src="/images/profile.png"
          alt="John Doe"
          width={243}
          height={243}
          className="rounded-full"
        />
      </section>
      <section className="recent-post p-20 h-auto bg-slate-300">
        <ul className="flex justify-around items-center">
          <li>
            <p>Recent posts</p>
          </li>
          <li className="cursor-pointer relative group">
            <Link href={`/blog`}>
              <p className="text-blue-400">View All</p>
            </Link>
            <span className="absolute w-full h-[2px] bg-blue-400 scale-x-0 left-0 bottom-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom"></span>
          </li>
        </ul>
        <div className="posts">
          
        </div>
      </section>
    </>
  );
}
