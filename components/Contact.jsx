"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Contact = ({ dict }) => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(dict.contact.form.sending);
    const formData = new FormData(event.target);

    formData.append("access_key", "739dbe93-6c2d-42ac-9bfd-21ead8d393bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(dict.contact.form.success);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-6 py-10 scroll-mt-20
      bg-gradient-to-br from-gray-700 to-background 
      backdrop-blur-md shadow-xl
      transition-all duration-500 overflow-hidden"
    >
      <motion.h2
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl text-primary"
      >
        {dict.contact.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        {dict.contact.description}
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto font-ovo"
      >
        <div className="grid grid-cols-auto md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder={dict.contact.form.namePlaceholder}
            required
            aria-label="Name"
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-background/70"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="email"
            placeholder={dict.contact.form.emailPlaceholder}
            required
            aria-label="Email"
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-background/70"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-background/70 mb-4"
          rows="6"
          placeholder={dict.contact.form.messagePlaceholder}
          required
          aria-label="Message"
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          initial={{ y: 40 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 text-lg flex items-center justify-between font-skranji
          gap-2 bg-secondary/80 hover:bg-primary/70 shadow-sm shadow-gray-700 text-foreground 
          rounded-full mx-auto cursor-pointer"
        >
          {dict.contact.form.submitButton}
          <Image src={assets.right_arrow} alt="Right arrow" className="w-4" />
        </motion.button>

        <p className="text-center mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
