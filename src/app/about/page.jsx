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
      "At GlobalRecruit, we bridge the gap between exceptional international talent and leading companies worldwide. Our mission is to facilitate successful cross-border placements that drive business growth and create meaningful career opportunities.",
  },
  {
    id: 2,
    subtitle: "Who Are We?",
    title: "Who We Are:",
    heading: "International Recruitment Specialists",
    description:
      "We are a specialized recruitment agency with over 15 years of experience in international talent acquisition. Our team of HR professionals, immigration specialists, and industry experts work together to ensure successful placements across borders, cultures, and industries.",
  },
  {
    id: 3,
    subtitle: "",
    title: "Global Presence",
    heading: "",
    description:
      "With offices in 12 countries and partnerships across 50+ markets, we have the local knowledge and global reach to source the best talent for your organization, regardless of location.",
  },
  {
    id: 4,
    subtitle: "",
    title: "Industry Expertise",
    heading: "",
    description:
      "We specialize in technology, finance, healthcare, engineering, and manufacturing sectors, with deep understanding of industry-specific requirements and regulatory compliance needs.",
  },
  {
    id: 5,
    subtitle: "",
    title: "Cultural Intelligence",
    heading: "",
    description:
      "Our cultural expertise ensures successful integration of international candidates, with comprehensive support for relocation, visa processes, and cultural adaptation.",
  },
  {
    id: 6,
    subtitle: "",
    title: "Trusted Partnerships",
    heading: "",
    description:
      "We build long-term relationships with both clients and candidates, providing ongoing support and ensuring successful placements that benefit all parties involved. With GlobalRecruit, you're not just hiring talent—you're building global success stories.",
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
              Get Started
            </button>
          </Link>
          <Link href="/job-application">
            <button className="bg-[#35358B] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#6c1293] hover:text-white transition">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default AboutUs;
