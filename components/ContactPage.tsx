import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 border-t border-[#3d3d43] bg-[#3d3d43] text-white"
    >
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="inline-block rounded-lg px-3 py-1 text-sm bg-[#0a0a0a]">
            Get in Touch
          </div>
          <h2 className="text-3xl font-bold md:text-4xl/tight">Let's Collaborate</h2>
          <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            If you have a project in mind or would like to discuss potential
            collaboration opportunities, feel free to reach out.
          </p>
          <div className="mt-4 text-sm space-y-1">
            <p>Email: <a href="mailto:m.areebbinnadeem@gmail.com" className="underline hover:text-gray-300">M.AreebBinNadeem@gmail.com</a></p>
            <p>Phone: <a href="tel:+923242626775" className="underline hover:text-gray-300">+92-324-2626775</a></p>
          </div>
        </div>
        <form className="grid gap-4">
          <Input
            type="text"
            placeholder="Name"
            className="max-w-lg flex-1 border-2 border-[#0a0a0a] bg-transparent placeholder:text-[#E7E7E4] focus:ring-0"
          />
          <Input
            type="email"
            placeholder="Email"
            className="max-w-lg flex-1 border-2 border-[#0a0a0a] bg-transparent placeholder:text-[#E7E7E4] focus:ring-0"
          />
          <Textarea
            placeholder="Message"
            className="max-w-lg flex-1 border-2 border-[#0a0a0a] bg-transparent placeholder:text-[#E7E7E4] focus:ring-0"
          />
          <Button
            type="submit"
            className="max-w-lg bg-[#E7E7E4] text-black hover:bg-[#E7E7E4] hover:opacity-80"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
