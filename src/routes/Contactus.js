import { CONTACTUS_API } from "../hooks/Apis";
import { ContactUsCover } from "../assets/data/Imagedata";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaChevronRight,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import React, { useState, useMemo } from "react";
import { GlobalData } from "../assets/data/GlodalData";
import SEO from "../components/SEO/SEO";
import seoData from "../assets/data/seo.json";
import { Link } from "react-router-dom";
import { User, Mail, PhoneCall, BookOpen, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Subject options for dropdown
  const subjectOptions = [
    "Wedding Planning",
    "Corporate Events",
    "Social & Birthday Parties",
    "Entertainment & Music Shows",
    "Digital Marketing & SEO",
    "Website & App Development",
    "Other",
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does it take to get a response?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please use our WhatsApp number for faster response.",
    },
    {
      question: "What information should I include in my project inquiry?",
      answer:
        "Please include your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can understand your needs and provide an accurate proposal.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes, we offer free initial consultations to discuss your project requirements and provide preliminary advice. This helps us understand your needs and determine how we can best assist you.",
    },
    {
      question: "What types of projects do you work on?",
      answer:
        "We work on a wide range of projects including professional event planning, wedding management, website development, branding, digital marketing, and e-commerce solutions.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity. Simple websites may take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the project planning phase.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Memoize FAQ section
  const faqSection = useMemo(
    () => (
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-3 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-[12px] md:text-[16px] font-medium">
                {faq.question}
              </span>
              <FaChevronRight
                className={`transition-transform ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-3 bg-gray-50 text-[12px] md:text-[16px] text-gray-700 border-t">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    ),
    [openIndex],
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return;

    setLoading(true);
    try {
      const response = await fetch(CONTACTUS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const { title, description, keywords, canonical, ogImage } =
    seoData.contactus;

  const contactMethods = [
    {
      icon: <HiOutlineMail className="text-[20px]" />,
      label: "Email",
      value: GlobalData.company.companyEmail,
      href: `mailto:${GlobalData.company.companyEmail}`,
      color: "text-primary",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: GlobalData.company.companyPhone,
      href: `tel:${GlobalData.company.companyPhone}`,
      color: "text-green-600",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Chat with us",
      href: GlobalData.company.companyWhatsapp,
      color: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white my-6 mt-28">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        image={ogImage}
        url={canonical}
      />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-12 md:py-20 px-4 md:px-12 rounded-3xl mx-4 shadow-xl"
        style={{
          backgroundImage: `url("${ContactUsCover}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-right text-white max-w-2xl ml-auto flex flex-col items-end justify-center h-full">
          <h1 className="text-[18px] md:text-[38px] lg:text-[42px] font-bold mb-4 leading-tight">
            Get in touch,
            <br />
            we'd love to hear from you.
          </h1>
          <p className="text-[12px] md:text-base mb-6 max-w-md ">
            You can contact us through mail or you can get in touch at our
            digital office.
          </p>

          <div className="flex flex-wrap gap-3 justify-end w-full">
            <Link
              to="/contactus"
              className="inline-flex text-[12px] items-center bg-white text-primary px-4 py-2 rounded-xl text-sm font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaPhone className="mr-2 " /> Get in Touch
            </Link>
            <a
              href={GlobalData.company.companyWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaWhatsapp className="mr-2 text-base text-[#25D366]" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">
            {/* Subtle top primary gradient border line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/60 via-primary to-orange-500/80"></div>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 font-TuskerGrotesk tracking-wide">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm placeholder-gray-400 text-gray-800"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm placeholder-gray-400 text-gray-800"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <PhoneCall className="h-4 w-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm placeholder-gray-400 text-gray-800"
                    required
                  />
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm text-gray-800 appearance-none"
                    required
                  >
                    <option value="" className="text-gray-400">
                      Select Subject
                    </option>
                    {subjectOptions.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 text-sm placeholder-gray-400 text-gray-800 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center space-x-2 shadow-md ${
                  loading
                    ? "bg-slate-300 cursor-not-allowed text-slate-500 shadow-none"
                    : "bg-primary hover:bg-primary/95 text-white hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
                }`}
              >
                <span>{loading ? "Sending Message..." : "Send Message"}</span>
                {!loading && <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 lg:pl-4">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-TuskerGrotesk tracking-wide">
                Let's Start a Conversation
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Whether you're ready to begin a project or just want to explore
                possibilities, we're here to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center p-3.5 bg-white rounded-2xl border border-slate-100 hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group"
                >
                  <div
                    className={`p-3 rounded-full bg-slate-50 mr-4 group-hover:scale-110 transition-transform ${method.color}`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{method.label}</p>
                    <p className="text-sm font-bold text-gray-800">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 relative overflow-hidden">
              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">
                Quick Connect
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${GlobalData.company.companyEmail}`}
                  className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300 text-xs font-semibold hover:shadow-sm"
                >
                  <FaEnvelope className="text-primary text-xs" />
                  <span>Email</span>
                </a>
                <a
                  href={`tel:${GlobalData.company.companyPhone}`}
                  className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300 text-xs font-semibold hover:shadow-sm"
                >
                  <FaPhone className="text-green-600 text-xs" />
                  <span>Call</span>
                </a>
                <a
                  href={GlobalData.company.companyWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 hover:border-primary transition-all duration-300 text-xs font-semibold hover:shadow-sm"
                >
                  <FaWhatsapp className="text-green-500 text-xs" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="px-4 max-w-4xl mx-auto py-12">
        <h2 className="text-[18px] md:text-[26px] lg:text-3xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-center mb-6">
          Find answers to common questions about our programs and academy.
        </p>
        {faqSection}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[18px] md:text-[26px] lg:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. We're just a message away.
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            <a
              href={`mailto:${GlobalData.company.companyEmail}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-3 py-3.5 rounded-2xl hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm font-semibold"
            >
              <FaEnvelope className="text-xs sm:text-sm" />
              <span>Start with Email</span>
            </a>
            <a
              href={GlobalData.company.companyWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-3.5 rounded-2xl hover:bg-[#20ba5a] hover:shadow-lg hover:shadow-[#25D366]/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-xs sm:text-sm font-semibold"
            >
              <FaWhatsapp className="text-sm sm:text-base" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
