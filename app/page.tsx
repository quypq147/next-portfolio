import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section className="home min-h-screen flex p-10 flex-col-reverse items-center justify-center gap-10 sm:flex-row sm:mx-40 sm:items-start">
        <div className="content grid gap-5 sm:mx-30 my-10">
          <h1 className="text-4xl text-center sm:text-left">
            <b>
              Hi, I'm John,<br /> Creative Technologist
            </b>
          </h1>
          <p className="text-center sm:text-left text-gray-700">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-md sm:w-auto mx-auto sm:mx-0">
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

      <section className="recent-post py-5 px-5 sm:px-20 grid gap-5 bg-gray-100">
        <ul className="flex justify-between items-center">
          <li>
            <p className="font-bold text-lg">Recent posts</p>
          </li>
          <li className="cursor-pointer relative group">
            <Link href={`/blog`}>
              <div className="relative">
                <p className="text-blue-400">View All</p>
                <span className="absolute w-full h-[2px] bg-blue-400 scale-x-0 left-0 bottom-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="posts grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white w-full p-5 shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Design System</CardTitle>
              <CardDescription className="text-gray-700 text-sm">
                12 Feb 2020 | Design, Pattern
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">Read more</p>
            </CardFooter>
          </Card>
          <Card className="bg-white w-full p-5 shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Pixel Perfect Icons
              </CardTitle>
              <CardDescription className="text-gray-700 text-sm">
                12 Feb 2020 | Figma, Icon Design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">Read more</p>
            </CardFooter>
          </Card>
        </div>
      </section>
      <Works />
      <Footer />
    </>
  );
}

