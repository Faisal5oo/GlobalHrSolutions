"use client";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Minus, Plus, X, Globe, Users, Briefcase, Award } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Global Talent Sourcing",
    description: "Access to top-tier candidates from around the world with specialized expertise.",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "Executive Recruitment",
    description: "Senior-level placements for C-suite and leadership positions.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Overseas Placements",
    description: "Seamless international recruitment with visa and relocation support.",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    title: "Industry Specialization",
    description: "Deep expertise in technology, finance, healthcare, and engineering sectors.",
    icon: <Award className="w-8 h-8" />,
  },
];

const solutions = [
  {
    title: "Global Reach",
    description: "Access to talent pools across 50+ countries with local market expertise.",
  },
  {
    title: "Cultural Intelligence",
    description: "Understanding of local business practices and cultural nuances.",
  },
  {
    title: "Compliance Expertise",
    description: "Full compliance with international labor laws and visa requirements.",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous screening and verification processes for all candidates.",
  },
];

const faqs = [
  {
    question: "What industries do you specialize in for international recruitment?",
    answer:
      "We specialize in technology, finance, healthcare, engineering, and manufacturing sectors, with deep expertise in placing candidates across these industries globally.",
  },
  {
    question: "How do you ensure quality of international candidates?",
    answer:
      "Our rigorous screening process includes technical assessments, cultural fit evaluation, reference checks, and compliance verification to ensure only top-tier candidates.",
  },
  {
    question: "What support do you provide for overseas placements?",
    answer:
      "We provide comprehensive support including visa assistance, relocation guidance, cultural orientation, and ongoing integration support for successful placements.",
  },
  {
    question: "What is your typical recruitment timeline?",
    answer:
      "Standard placements typically take 4-8 weeks, while executive searches may take 8-12 weeks. We provide regular updates throughout the process.",
  },
];

const page = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <LayoutWrapper>
      <div className="text-white py-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* section 1 */}
        <div className="grid md:grid-cols-2 gap-4 items-center pt-20 pb-10">
          <div className="space-y-6 self-start mt-8">
            <div className="inline-block">
              <h4 className="text-sm tracking-wide inline text-white bg-[#0B173D] px-4 py-2 rounded-full">
                Global Recruitment
              </h4>
            </div>
            <h2 className="text-[3.5rem] text-white">
              <span className="bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent">
                Connect{" "}
              </span>{" "}
              Global Talent
              <br /> with Opportunity
            </h2>
            <p className="text-white text-md text-start opacity-70">
              We bridge the gap between exceptional international talent and leading companies worldwide. 
              Our expertise in global recruitment ensures successful placements across borders and cultures.
            </p>

            {/* Buttons Section */}
            <div className="flex space-x-2 md:space-x-4">
              <Link href="/contact">
                <button className="bg-[#6c1293] text-white rounded-full shadow-md hover:bg-[#35358B] hover:text-white transition py-1 px-4 text-sm md:text-base md:py-2 md:px-7">
                  Get Started
                </button>
              </Link>
              <button
                className="bg-[#35358B21] text-white py-1 px-4 text-sm md:text-base md:py-2 md:px-7 rounded-full shadow-md  transition"
                onClick={scrollToSection}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <Image
              src="/placeholder.png"
              alt="Global recruitment team"
              width={1600}
              height={1600}
              className="w-full h-auto md:max-w-[80%] lg:max-w-[100%] rounded-md"
            />
          </div>
        </div>

        <section className="text-white py-10">
          <div className="rounded-lg relative">
            <h2 className="text-[3.5rem] bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent text-start py-2">
              Our Services
            </h2>
            <p className="text-start text-white opacity-70 text-lg">
              We provide comprehensive recruitment solutions that connect exceptional talent <br />{" "}
              with leading companies across the globe. From entry-level to executive positions,{" "} <br />
              we ensure successful placements that drive business growth.
            </p>
            <div className="grid md:grid-cols-2 gap-14 mt-10">
              <div className="mt-10 space-y-12">
                {/* Row 1 - Left Aligned */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="bg-[#152041] py-2 px-3  md:w-1/2 rounded-full shadow-md">
                    <h3 className="text-sm flex items-center text-white">
                      ✦ Global Talent Sourcing & Screening
                    </h3>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Row 2 - Right Aligned */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="bg-[#152041] py-2 px-3 md:w-1/2 rounded-full shadow-md">
                    <h3 className="text-sm flex items-center text-white">
                      ✦ Executive & Leadership Recruitment
                    </h3>
                  </div>
                </div>

                {/* Row 3 - Left Aligned */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="bg-[#152041] py-2 px-3 md:w-1/2 rounded-full shadow-md">
                    <h3 className="text-sm flex items-center  text-white">
                      ✦ International Compliance & Visa Support
                    </h3>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Row 4 - Right Aligned */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2"></div>
                  <div className="bg-[#152041] py-2 px-3  md:w-1/2 rounded-full shadow-md">
                    <h3 className="text-sm flex items-center text-white">
                      ✦ Cultural Integration & Relocation Support
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl relative flex items-center justify-center">
                  <Image
                    src="/placeholder-2.png"
                    width={500}
                    height={500}
                    alt="Global recruitment services"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="text-white py-20" ref={sectionRef}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[3.5rem] bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent text-center"
          >
            How We Work
          </motion.h2>

          <div className="max-w-6xl mx-auto mt-12 space-y-6">
            {/* Step 1 - Image Left, Text Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 items-start"
            >
              <Image
                src="/step-1.png"
                alt="Step 1"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="mt-6">
                <h3 className="text-4xl mb-2 text-white">
                  <span className="text-[#6c1293]">Step 1:</span> Discovery
                </h3>
                <p className="text-white opacity-70 text-lg">
                  We understand your requirements, company culture, and specific needs to create a targeted recruitment strategy.
                </p>
              </div>
            </motion.div>

            {/* Step 2 - Text Left, Image Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 items-start"
            >
              <div className="mt-6">
                <h3 className="text-4xl mb-2 text-white">
                  <span className="text-[#6c1293]">Step 2:</span> Sourcing
                </h3>
                <p className="text-white opacity-70 text-lg">
                  Our global network identifies and screens qualified candidates from our extensive international talent pool.
                </p>
              </div>
              <Image
                src="/step-2.png"
                alt="Step 2"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </motion.div>

            {/* Step 3 - Image Left, Text Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 items-start"
            >
              <Image
                src="/step-3.png"
                alt="Step 3"
                width={600}
                height={400}
                className="rounded-lg"
              />
              <div className="mt-6">
                <h3 className="text-4xl mb-2 text-white">
                  <span className="text-[#6c1293]">Step 3:</span> Placement
                </h3>
                <p className="text-white opacity-70 text-lg">
                  We facilitate successful placements with ongoing support for cultural integration and long-term success.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* section 3 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[2.5rem] bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent text-center">
              Comprehensive Recruitment Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 pt-6 pb-16 rounded-2xl">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-start text-start px-6 pb-6 ${
                    index !== 0 ? "md:border-l border-[#6c1293]" : ""
                  }`}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#6c1293] rounded-full text-white text-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-semibold mt-3">
                    {service.title}
                  </h3>
                  <p className="text-white text-md mt-1 opacity-70">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center space-x-2 md:space-x-4">
            <Link href="/contact">
              <button className="bg-[#6c1293] text-white rounded-full shadow-md hover:bg-[#35358B] hover:text-white transition py-1 px-4 text-sm md:text-base md:py-2 md:px-7">
                Get Started
              </button>
            </Link>
            <Link href="/job-application">
              <button className="bg-[#35358B21] text-white py-1 px-4 text-sm md:text-base md:py-2 md:px-7 rounded-full shadow-md  transition">
                Apply Now
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* section 4 */}

      <section className="max-w-7xl mx-auto py-16 px-6 lg:px-20">
        <div className="flex flex-col  md:flex-row items-center justify-between rounded-2xl bg-[#0B173D] p-8">
          {/* Left Side - Text Content */}
          <div className="text-white">
            <h1 className="text-[4rem] bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent">
              Ready to Grow?
            </h1>
            <p className="text-white mt-4 text-2xl">
              Let's Find Your Perfect
              <br /> International Talent
            </p>

            {/* Button Section */}
            <div className="flex space-x-4 mt-10">
              <Link href="/contact">
                <button className="bg-[#6c1293] text-white rounded-full shadow-md hover:bg-[#35358B] hover:text-white transition py-1 px-4 text-sm md:text-base md:py-2 md:px-7">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="mt-10 md:mt-0">
            <div className="relative w-72 h-72 md:w-100 md:h-80 bg-[#190E26] rounded-2xl overflow-hidden">
              <Image
                src="/grow-section.png"
                alt="Global recruitment success"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}

      <section className="max-w-7xl mx-auto py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center max-w-2xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#0A1537] shadow-md rounded-2xl p-6 h-64 w-full border-l-2 border-t-2 border-[#6c1293]"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#6c1293] text-white rounded-full">
                <Globe className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-medium text-[#E1D5E5] mt-4">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mt-2 text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <Link href="/contact">
            <button className="bg-[#6c1293] text-white rounded-full shadow-md hover:bg-[#35358B] hover:text-white transition py-1 px-4 text-sm md:text-base md:py-2 md:px-7">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* section 6 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="mt-6 rounded-xl py-10 bg-[#0A1537] border border-[#6c1293e5] px-14">
          <h2 className="text-center text-2xl sm:text-3xl bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent">
            FAQs
          </h2>
          <p className="text-center text-white opacity-70 mt-2 text-sm sm:text-base">
            Got Questions? We've Got Answers
          </p>
          {faqs.map((faq, index) => (
            <div key={index} className={`p-12 sm:px-8 sm:py-8 shadow-md`}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex flex-col sm:flex-row sm:items-center justify-between text-left"
              >
                {/* Left side: Number & Question */}
                <div className="flex items-start sm:items-center">
                  <span className="text-lg sm:text-lg text-[#E6E8EB] leading-snug sm:leading-normal">
                    {faq.question}
                  </span>
                </div>

                {/* Right side: Expand/collapse icon */}
                <div className="mt-2 sm:mt-0">
                  {openIndex === index ? (
                    <Minus className="text-white p-2 rounded-full" size={30} />
                  ) : (
                    <Plus className="text-white p-2 rounded-full" size={30} />
                  )}
                </div>
              </button>

              {/* FAQ Answer (Collapsible) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default page;
