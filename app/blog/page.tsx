import { Metadata } from "next";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import * as React from "react";

export const metadata: Metadata = {
  title: "John's Portfolio - Blogs",
  description: "John's Portfolio Blog Page",
};

const blogs = [
  {
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    type: "Express, Handlebars",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Understanding JavaScript Closures",
    date: "15 Mar 2020",
    type: "JavaScript, Functional Programming",
    description:
      "Closures are a fundamental concept in JavaScript that every developer should understand. This article explores closures in depth with practical examples.",
  },
  {
    title: "A Guide to CSS Grid",
    date: "10 Jul 2021",
    type: "CSS, Web Design",
    description:
      "CSS Grid is a powerful layout system available in CSS. This guide covers the basics of CSS Grid and how to use it to create complex layouts easily.",
  },
  {
    title: "Getting Started with TypeScript",
    date: "22 Sep 2022",
    type: "TypeScript, JavaScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. This article helps you get started with TypeScript and understand its benefits.",
  },
];

function Main() {
  return (
    <div className="blog-main-page animate-appear">
      <Navbar />
      <section className=" py-3 px-3 justify-center items-center">
        <div className="blog-main justify-center sm:grid">
          <h1 className="title text-3xl">
            <b>Works</b>
          </h1>
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="card rounded-none shadow-none outline-none border-b-2 border-t-0 border-l-0 border-r-0"
            >
              <CardHeader>
                <CardTitle className="text-2xl">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                  <CardDescription className="text-1xl border-r-2 ml-2">{blog.date}</CardDescription>
                  <CardDescription className="text-1xl">{blog.type}</CardDescription>
                </CardContent>
              <CardContent>
                <CardDescription>{blog.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Main;
