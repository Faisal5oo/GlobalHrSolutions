import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import { ArrowRight, Globe, Users, Award, Shield } from "lucide-react";
import Link from "next/link";

const aboutData = [
  {
    id: 1,
    subtitle: "About Us",
    title: "Our Mission:",
    heading: "Connecting Global Talent with Opportunity",
    description:
      "At Global Hire Solution, we specialize in connecting companies with the right talent and helping professionals find their ideal career paths worldwide. With years of expertise in international recruitment, staffing, and HR solutions, we deliver seamless hiring experiences for both employers and job seekers.",
  },
  {
    id: 2,
    subtitle: "Who Are We?",
    title: "Who We Are:",
    heading: "International Recruitment Specialists",
    description:
      "We are a specialized recruitment agency with extensive experience in international talent acquisition. Our team of HR professionals, immigration specialists, and industry experts work together to ensure successful placements across borders, cultures, and industries.",
  },
  {
    id: 3,
    subtitle: "",
    title: "Global Talent Network",
    heading: "",
    description:
      "Access to diverse professionals across industries worldwide. We connect you with skilled professionals across different countries while ensuring compliance and relocation support.",
  },
  {
    id: 4,
    subtitle: "",
    title: "Industry Expertise",
    heading: "",
    description:
      "We serve Information Technology (IT), Sales & Marketing, Finance & Accounting, Healthcare & Pharmaceuticals, Engineering & Manufacturing, Customer Support & BPO, and Education & Training sectors with deep understanding of industry-specific requirements.",
  },
  {
    id: 5,
    subtitle: "",
    title: "Fast & Tailored Solutions",
    heading: "",
    description:
      "We reduce hiring time without compromising quality. Our customized recruitment approach ensures every client gets personalized service that meets their specific needs and timeline requirements.",
  },
  {
    id: 6,
    subtitle: "",
    title: "Trusted Partnerships",
    heading: "",
    description:
      "We build long-term relationships with both clients and candidates, providing transparent, professional, and result-driven service. With Global Hire Solution, you're not just hiring talent—you're building global success stories.",
  },
];

const AboutUs = () => {
  return (
    <LayoutWrapper>
      <div className="px-6 md:px-16 lg:px-24 pt-40 min-h-[100vh]">
        {aboutData.map((section) => (
          <div
            key={section.id}
            className="text-center mb-12 max-w-3xl mx-auto space-y-6"
          >
            {section.subtitle && (
              <div className="relative inline-block">
                <span className="absolute top-2 -left-1 w-2 h-2 bg-[#6c1293] rounded-full transform -translate-x-2 -translate-y-1"></span>
                <h4 className="text-md tracking-wide inline text-[#6c1293]">
                  {section.subtitle}{" "}
                </h4>
              </div>
            )}
            <h2 className="bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent text-5xl font-semibold mt-2">
              {section.title}
            </h2>
            {section.heading && (
              <h3 className="text-white text-5xl mt-2">{section.heading}</h3>
            )}
            <p className="text-gray-300 mt-4">{section.description}</p>
            {section.id !== aboutData.length && (
              <hr className="border-t border-white my-8" />
            )}
          </div>
        ))}
        <div className="flex justify-center space-x-4 my-10">
          <Link href="/contact">
            <button className="bg-[#6c1293] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#35358B] hover:text-white transition">
              Contact Us
            </button>
          </Link>
          <Link href="/job-application">
            <button className="bg-[#35358B] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#6c1293] hover:text-white transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default AboutUs;
