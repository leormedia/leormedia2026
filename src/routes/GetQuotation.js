import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeft, FaCheck, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMoneyBillWave, FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import { CONTACTUS_API } from "../hooks/Apis";
import { EventHeroCover, WeddingCoverImage, ServicesCoverImage, ContactUsCover } from "../assets/data/Imagedata";
import seoData from "../assets/data/seo.json";

const GetQuotation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    eventType: "",
    budget: "",
    eventDate: "",
    location: "",
    guests: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const eventTypes = [
    "Corporate Events",
    "Entertainment & Music Shows",
    "Digital Marketing & SEO",
    "Website & App Development",
    "Branding & Advertisement",
    "Other"
  ];

  const budgetRanges = [
    "Below ₹1,00,000",
    "₹1,00,000 - ₹5,00,000",
    "₹5,00,000 - ₹10,00,000",
    "₹10,00,000 - ₹25,00,000",
    "Above ₹25,00,000",
    "Not Decided Yet"
  ];

  const steps = [
    {
      id: "event-type",
      image: EventHeroCover,
      question: "Which kind of event are you looking for?",
      subtitle: "Select the category that best fits your requirements.",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleSelect("eventType", type)}
              className={`p-6 text-left rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm ${
                formData.eventType === type
                  ? "border-primary bg-primary/20 text-white shadow-lg"
                  : "border-white/20 bg-white/10 text-white hover:border-primary/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{type}</span>
                {formData.eventType === type && <FaCheck className="text-primary" />}
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      id: "event-details",
      image: WeddingCoverImage,
      question: "Tell us more about the event.",
      subtitle: "This helps us check availability and prepare a better estimate.",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto p-8 rounded-3xl bg-black/30 backdrop-blur-md border border-white/10">
          <div className="space-y-4 text-left">
            <label className="block text-lg font-medium text-white/90">Event Date (Approximate)</label>
            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleInputChange("eventDate", e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-primary outline-none transition-colors text-lg text-white"
              />
            </div>
          </div>
          <div className="space-y-4 text-left">
            <label className="block text-lg font-medium text-white/90">Location / Venue</label>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="text"
                placeholder="Where is the event?"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-primary outline-none transition-colors text-lg text-white placeholder:text-white/40"
              />
            </div>
          </div>
          <div className="space-y-4 text-left md:col-span-2">
            <label className="block text-lg font-medium text-white/90">Estimated Guest Count</label>
            <div className="relative">
              <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="number"
                placeholder="How many people are attending?"
                value={formData.guests}
                onChange={(e) => handleInputChange("guests", e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-primary outline-none transition-colors text-lg text-white placeholder:text-white/40"
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "budget",
      image: ServicesCoverImage,
      question: "Any Budget Planning?",
      subtitle: "Knowing your budget helps us suggest the best options within your range.",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
          {budgetRanges.map((range) => (
            <button
              key={range}
              onClick={() => handleSelect("budget", range)}
              className={`p-6 text-left rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm ${
                formData.budget === range
                  ? "border-primary bg-primary/20 text-white shadow-lg"
                  : "border-white/20 bg-white/10 text-white hover:border-primary/50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold">{range}</span>
                {formData.budget === range && <FaCheck className="text-primary" />}
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      id: "contact",
      image: ContactUsCover,
      question: "Almost done! Name and phone number?",
      subtitle: "How should we contact you with the quotation?",
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10">
          <div className="space-y-4 text-left">
            <label className="block text-lg font-medium text-white/90">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-primary outline-none transition-colors text-lg text-white placeholder:text-white/40"
                required
              />
            </div>
          </div>
          <div className="space-y-4 text-left">
            <label className="block text-lg font-medium text-white/90">Phone Number</label>
            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="tel"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-primary outline-none transition-colors text-lg text-white placeholder:text-white/40"
                required
              />
            </div>
          </div>
          <div className="space-y-4 text-left md:col-span-2">
            <label className="block text-lg font-medium text-white/90">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-primary outline-none transition-colors text-lg text-white placeholder:text-white/40"
                required
              />
            </div>
          </div>
          <div className="space-y-4 text-left md:col-span-2">
            <label className="block text-lg font-medium text-white/90">Any Additional Details?</label>
            <textarea
              placeholder="Tell us more about your specific requirements..."
              rows="4"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full p-4 rounded-xl bg-white/10 border-2 border-white/20 focus:border-primary outline-none transition-colors text-lg text-white placeholder:text-white/40 resize-none"
            />
          </div>
        </div>
      )
    }
  ];

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 400);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in your contact details.");
      return;
    }

    setLoading(true);
    try {
      // Constructing message for the API
      const fullMessage = `
        Get Quotation Request:
        Event Type: ${formData.eventType}
        Budget: ${formData.budget}
        Event Date: ${formData.eventDate}
        Location: ${formData.location}
        Guests: ${formData.guests}
        Additional Details: ${formData.message}
      `;

      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `Quotation Request: ${formData.eventType}`,
        message: fullMessage
      };

      const response = await fetch(CONTACTUS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.error || "Failed to send request. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center max-w-xl">
          <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <FaCheck size={40} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-xl text-gray-600 mb-8">
            Your quotation request has been sent successfully. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex flex-col pt-24 md:pt-28 overflow-hidden">
      <Helmet>
        <title>Get a Quotation | Leor Media</title>
        <meta name="description" content="Get a personalized quotation for your event, branding, or digital marketing needs from Leor Media." />
      </Helmet>

      {/* Dynamic Background Image */}
      <div 
        className="fixed inset-0 z-0 transition-all duration-1000 ease-in-out scale-110"
        style={{
          backgroundImage: `url("${steps[currentStep].image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-white/20 z-[60]">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_15px_rgba(255,94,14,0.5)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative z-10">
        <div className="w-full max-w-5xl mx-auto">
          {/* Back Button */}
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="mb-8 flex items-center text-white/70 hover:text-primary transition-colors font-medium text-lg group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous Step
            </button>
          )}

          {/* Question Section */}
          <div className="text-center mb-12 animate-fadeIn">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">
              Step {currentStep + 1} of {steps.length}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-4 drop-shadow-lg">
              {steps[currentStep].question}
            </h1>
            <p className="text-lg md:text-xl text-white/80 px-4 max-w-2xl mx-auto">
              {steps[currentStep].subtitle}
            </p>
          </div>

          {/* Form Component */}
          <div className="animate-slideUp min-h-[400px] flex items-center justify-center">
            {steps[currentStep].component}
          </div>

          {/* Navigation Footer */}
          <div className="mt-12 flex justify-center gap-4">
            {currentStep === steps.length - 1 ? (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-12 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl text-xl flex items-center gap-3 transform hover:scale-105 active:scale-95 disabled:bg-gray-400"
              >
                {loading ? "Sending..." : "Submit Quotation Request"}
                {!loading && <FaCheck />}
              </button>
            ) : (
              (currentStep === 1) && (
                <button
                  onClick={nextStep}
                  className="px-12 py-5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-xl text-xl flex items-center gap-3 transform hover:scale-105 active:scale-95"
                >
                  Continue
                  <FaArrowRight />
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default GetQuotation;
