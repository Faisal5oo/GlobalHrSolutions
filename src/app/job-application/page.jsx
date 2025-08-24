"use client";

import { useState } from "react";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";
import { User, Mail, Phone, Briefcase, Globe, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const JobApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    desiredPosition: "",
    country: "",
    cvFile: null,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cvFile: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        desiredPosition: "",
        country: "",
        cvFile: null,
      });
    }, 2000);
  };

  if (submitted) {
    return (
      <LayoutWrapper>
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-white py-40 min-h-[100vh] text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#152041] p-12 rounded-[20px] border border-[#6c1293]"
          >
            <div className="w-20 h-20 bg-[#6c1293] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Application Submitted Successfully!
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Thank you for your interest in joining our global talent network. 
              Our recruitment team will review your application and contact you within 3-5 business days.
            </p>
            <div className="space-y-4 text-left max-w-2xl mx-auto bg-[#0A1537] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#6c1293] mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#6c1293] rounded-full mt-2"></div>
                  <p className="text-gray-300">Our team will review your CV and qualifications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#6c1293] rounded-full mt-2"></div>
                  <p className="text-gray-300">We'll match you with relevant opportunities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#6c1293] rounded-full mt-2"></div>
                  <p className="text-gray-300">You'll receive personalized career guidance</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 bg-[#6c1293] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#35358B] hover:text-white transition"
            >
              Submit Another Application
            </button>
          </motion.div>
        </div>
      </LayoutWrapper>
    );
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto px-6 lg:px-20 text-white py-40 min-h-[100vh]">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#6c1293] to-[#35358B] bg-clip-text text-transparent mb-4">
            Join Our Global Talent Network
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to take your career global? Submit your application and let us connect you with 
            exciting opportunities worldwide.
          </p>
        </div>

        <div className="bg-[#152041] p-10 rounded-[20px] border border-[#6c1293]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name *</label>
                <div className="flex items-center border border-gray-600 p-3 rounded-lg bg-[#0A1537]">
                  <User className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address *</label>
                <div className="flex items-center border border-gray-600 p-3 rounded-lg bg-[#0A1537]">
                  <Mail className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Phone and Position Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number *</label>
                <div className="flex items-center border border-gray-600 p-3 rounded-lg bg-[#0A1537]">
                  <Phone className="text-gray-400 mr-3" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Desired Position *</label>
                <div className="flex items-center border border-gray-600 p-3 rounded-lg bg-[#0A1537]">
                  <Briefcase className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    name="desiredPosition"
                    value={formData.desiredPosition}
                    onChange={handleChange}
                    placeholder="e.g., Software Engineer, Marketing Manager"
                    className="w-full bg-transparent outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Country *</label>
              <div className="flex items-center border border-gray-600 p-3 rounded-lg bg-[#0A1537]">
                <Globe className="text-gray-400 mr-3" />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-transparent outline-none text-white"
                  required
                >
                  <option value="" className="bg-[#0A1537] text-white">Select your country</option>
                  <option value="USA" className="bg-[#0A1537] text-white">United States</option>
                  <option value="UK" className="bg-[#0A1537] text-white">United Kingdom</option>
                  <option value="Canada" className="bg-[#0A1537] text-white">Canada</option>
                  <option value="Australia" className="bg-[#0A1537] text-white">Australia</option>
                  <option value="Germany" className="bg-[#0A1537] text-white">Germany</option>
                  <option value="France" className="bg-[#0A1537] text-white">France</option>
                  <option value="Netherlands" className="bg-[#0A1537] text-white">Netherlands</option>
                  <option value="Singapore" className="bg-[#0A1537] text-white">Singapore</option>
                  <option value="Japan" className="bg-[#0A1537] text-white">Japan</option>
                  <option value="Other" className="bg-[#0A1537] text-white">Other</option>
                </select>
              </div>
            </div>

            {/* CV Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">CV/Resume Upload *</label>
              <div className="flex items-center border border-gray-600 p-3 rounded-lg bg-[#0A1537]">
                <FileText className="text-gray-400 mr-3" />
                <input
                  type="file"
                  name="cvFile"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-transparent outline-none text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#6c1293] file:text-white hover:file:bg-[#35358B]"
                  required
                />
              </div>
              <p className="text-xs text-gray-400">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#6c1293] text-white py-4 rounded-lg shadow-md hover:bg-[#35358B] hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting Application...</span>
                  </div>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-8 p-6 bg-[#0A1537] rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-[#6c1293] mb-3">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#6c1293] rounded-full"></div>
                  <span>Global job opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#6c1293] rounded-full"></div>
                  <span>Career guidance & coaching</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#6c1293] rounded-full"></div>
                  <span>Visa & relocation support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#6c1293] rounded-full"></div>
                  <span>Cultural integration assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default JobApplication;
