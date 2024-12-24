import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Work_1 from "@/public/images/work/work_1.png";
import Work_2 from "@/public/images/work/work_2.png";
import Work_3 from "@/public/images/work/work_3.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Car } from "lucide-react";

function Works() {
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
  ];

  return (
    <section className="works py-3 px-10 items-center">
      <h1 className="title">Featured works</h1>
      {/* Desktop */}
      <div className="dk-post-works hidden sm:grid">
        {works.map((work, index) => (
          <Card
            key={index}
            className="work border-0 shadow-md p-5 flex gap-4 items-start"
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
            <CardContent className="grid items-center gap-2">
              <CardTitle className="text-2xl font-bold">{work.title}</CardTitle>
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
      <div className="mobile-post-works sm:hidden">
        <Carousel>
          <CarouselContent>
            {works.map((work, index) => (
              <CarouselItem key={index} className="work flex flex-col gap-4">
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
                    <Badge className="bg-blue-950 text-gray-200 px-3 py-1 rounded-md">
                      {work.year}
                    </Badge>
                    <p>{work.category}</p>
                  </div>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Works;
