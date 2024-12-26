import Navbar from "../components/Header";
import Footer from "../components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "John's Portfolio - Contact",
  description: "John's Portfolio Contact Page",
};

function Contact() {
  return (
    <div className="contact overflow-hidden animate-appear sm:overflow-auto">
      <Navbar />
      <section className="py-8 px-4 sm:px-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl">
          Have a question or want to work together? Fill out the form below, and
          I'll get back to you as soon as possible!
        </p>
        <form
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-6"
          action="/api/contact" // Add an API route to handle the form
          method="POST"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              rows={5}
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
