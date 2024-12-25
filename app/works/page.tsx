import * as React from "react";

import { Metadata } from "next";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import Work_1 from "@/public/images/work/work_1.png";
import Work_2 from "@/public/images/work/work_2.png";
import Work_3 from "@/public/images/work/work_3.png";
import Work_4 from "@/public/images/work/work_4.png";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "John's Portfolio - Works",
  description: "John's Portfolio Works Page",
};


const works = [
  {
    image: Work_1,
    title: "Designing Dashboard",
    year: "2020",
    category: "Dashboard",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    image: Work_2,
    title: "Vibrant Portraits of 2020",
    year: "2018",
    category: "Illustration",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    image: Work_3,
    title: "36 Days of Malayalam type",
    year: "2018",
    category: "Typography",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    image: Work_4,
    title: "Componets",
    year: "2018",
    category: "Components, Design",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];


function page() {

  return (
    <>
      <Navbar />
      <section className="works py-3 px-10 justify-center items-center">
        {/* Desktop */}
        <div className="dk-post-works justify-center items-center hidden sm:grid">
        <h1 className="title text-3xl">
          <b>Works</b>
        </h1>
          {works.map((work, index) => (
            <Card
              key={index}
              className="work shadow-none outline-none border-0 p-5 flex gap-4 items-start"
            >
              <CardHeader>
                <Image
                  src={work.image}
                  alt={`work_${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover shadow-sm"
                />
              </CardHeader>
              <CardContent className="grid justify-center items-center gap-2">
                <CardTitle className="text-2xl font-bold">
                  {work.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Badge className="bg-blue-950 text-gray-200 px-3 py-1 rounded-md">
                    {work.year}
                  </Badge>
                  <p>{work.category}</p>
                </CardDescription>
                <CardDescription className="text-gray-600">
                  {work.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Mobile */}
        <div className="mb-post-works sm:hidden">

        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
