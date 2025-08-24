"use client";

import { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, User, Building, Calendar } from "lucide-react";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import { InlineWidget } from "react-calendly";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      if (response.data.success) {
        alert("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-6 lg:px-20 text-white py-40 min-h-[100vh]">
        <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-center text-4xl mb-10 text-white">
          Let's Discuss Your Recruitment Needs
        </p>

        <div className="flex flex-col md:flex-row bg-[#152041] text-white p-10 rounded-[20px] gap-8">
          {/* Left Section */}
          <div className="md:w-1/2 flex flex-col justify-space-between h-full">
            <div>
              <h3 className="text-4xl font-bold mb-4">
                Ready to Find Your <br /> Perfect Talent?
              </h3>
              <p className="mb-6 text-gray-300">
                Whether you're looking to hire internationally or need guidance on global recruitment strategies, 
                our team of experts is here to help. Schedule a consultation or reach out directly.
              </p>
              
            </div>

            <div className="my-10 space-y-8">
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="text-[#6c1293]" />
                <div className="flex flex-col">
                  <span className="text-gray-300">Call For Consultation</span>
                  <span className="text-[#6c1293] text-lg">+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <Mail className="text-[#6c1293]" />
                <div className="flex flex-col">
                  <span className="text-gray-300">Send Us Email</span>
                  <span className="text-[#6c1293] text-lg">
                    info@globalrecruit.com
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-[#6c1293]" />
                <div className="flex flex-col">
                  <span className="text-gray-300">Global Headquarters</span>
                  <span className="text-[#6c1293] text-lg">
                    New York, NY, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg text-black">
            <h3 className="text-xl font-bold mb-4 text-center">
              Send Us a Message
            </h3>
            <p className="mb-6 text-sm text-center text-gray-500">
              Tell us about your recruitment needs and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* Name Input */}
                <div className="flex items-center border p-3 rounded-lg w-full md:w-1/2">
                  <User className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full outline-none"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="flex items-center border p-3 rounded-lg w-full md:w-1/2">
                  <Mail className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full outline-none"
                    required
                  />
                </div>
              </div>

              <div className="mb-4 flex items-center border p-3 rounded-lg w-full md:w-[48%] mt-4">
                <Building className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full outline-none"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your recruitment needs..."
                className="w-full border p-3 rounded-lg h-32 mb-4 outline-none"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#6c1293] text-white shadow-md hover:bg-[#35358B] hover:text-white transition py-3 rounded-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Calendly Section */}
        <div className="mt-16 bg-[#152041] p-10 rounded-[20px]">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Schedule a Consultation
            </h3>
            <p className="text-gray-300 text-lg">
              Book a free 30-minute consultation with our recruitment experts to discuss your hiring needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg">
            <InlineWidget
              url="https://calendly.com/your-calendly-link"
              styles={{
                height: '600px',
                width: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default ContactUs;
