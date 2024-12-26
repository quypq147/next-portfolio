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
import { Badge } from "@/components/ui/badge";

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
    <div  className="works-page animate-appear">
      <Navbar />
      <section className=" py-3 px-10 justify-center items-center">
        {/* Desktop */}
        <div className="dk-post-works justify-center items-center hidden sm:grid">
          <h1 className="title text-3xl">
            <b>Works</b>
          </h1>
          {works.map((work, index) => (
            <Card
              key={index}
              className="work shadow-none outline-none border-0 flex gap-4 justify-center items-center"
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
              <CardContent className="grid gap-2">
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
        <div className="mb-post-works sm:hidden flex flex-col gap-4">
          <h1 className="title text-3xl text-center">
            <b>Works</b>
          </h1>
          {works.map((work, index) => (
            <div
              key={index}
              className="work flex flex-col gap-4 opacity-0 animate-appear"
              style={{ animationDelay: `${index * 0.2}s` }} // Staggered animation
            >
              <Image
                src={work.image}
                alt={`work_${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg object-cover shadow-sm"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{work.title}</h2>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-950 text-gray-200 px-3 py-1 rounded-md">
                    {work.year}
                  </span>
                  <p>{work.category}</p>
                </div>
                <p className="text-gray-600">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default page;
