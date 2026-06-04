import React from 'react';
import { Helmet } from "react-helmet-async";
import shippinganddelivery from "../../assets/Thumbnails.png";

const title = "Terms and Conditions | Leor Media";
const description =
  "Read Leor Media's Terms and Conditions to understand the rules, guidelines, and responsibilities when using our services and products.";
const keywords =
  "terms and conditions, Leor Media, service policies, user agreement, rules and guidelines, Visakhapatnam digital agency, product usage terms";
const ogImage = shippinganddelivery;
const canonical = "https://leormedia.com/Legal/terms-and-conditions";

const TermsnConditions = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Leor Media" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical Link */}
        <link rel="canonical" href={canonical} />
      </Helmet>

      <div className='termsnconditions px-5 text-black mt-4 mx-4 leading-relaxed'>
        <h1 className="text-center py-10 font-bold text-3xl"> TERMS AND CONDITIONS </h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: June 2026</p>

        <h2 className="font-bold text-xl mt-6 mb-2">1. INTRODUCTION</h2>
        <p className="mb-4">
          Welcome to Leor Media (“Company”, “we”, “our”, “us”)!
          These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at{" "}
          <a href="https://leormedia.com/" className="text-primary hover:underline">
            https://leormedia.com/
          </a>{" "}
          (together or individually “Service”) operated by Leor Media.
        </p>
        <p className="mb-4">
          Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard, and disclose information that results from your use of our web pages. Your agreement with us includes these Terms and our Privacy Policy (“Agreements”).
        </p>
        <p className="mb-4">
          If you do not agree with (or cannot comply with) these Agreements, please contact us by emailing at{" "}
          <a href="mailto:mail@leormedia.com" className="text-primary hover:underline font-semibold">
            mail@leormedia.com
          </a>{" "}
          so we can find a solution.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">2. CLIENT RESPONSIBILITIES & SERVICE AGREEMENTS</h2>
        <p className="mb-2">
          By engaging Leor Media for event management, weddings, branding, or digital marketing services, you agree to:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            <strong>Information and Brand Assets:</strong> Provide raw media assets, copy materials, vector logo files, domain registry accesses, or venue contacts in a timely manner. Delays in asset provision may impact project timelines.
          </li>
          <li>
            <strong>Proof Approvals:</strong> Review design mockups, booklets, print templates, or website wireframes and provide written approval. Leor Media is not responsible for errors present in materials after client sign-off.
          </li>
          <li>
            <strong>Event Permits & Clearances:</strong> Unless explicitly agreed in writing, clients are responsible for securing all necessary government permits, local municipality clearances, performance licenses (PPL/IPRS for music), and venue approvals for events.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">3. PURCHASES & PROJECTS</h2>
        <p className="mb-4">
          If you wish to purchase any service or project made available through the Service (“Purchase”), you may be asked to supply information relevant to your Purchase, including your billing details, credit/debit card information, or corporate invoicing details.
        </p>
        <p className="mb-4">
          We use secure payment methods and may employ third-party service providers to facilitate payment processing. All project milestones, retainer invoice dates, and payment stages will be governed by the specific Service Level Agreement (SLA) signed between the client and Leor Media.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">4. CANCELLATION & REFUNDS</h2>
        <p className="mb-4">
          Our refund and cancellation terms differ based on the services hired (Event Management, Branding Design, or Digital Marketing). Please review our dedicated{" "}
          <a href="/Legal/return-policy" className="text-primary hover:underline font-semibold">
            Cancellation & Refund Policy
          </a>{" "}
          for comprehensive details on booking deposit forfeitures, print production cancellations, and monthly retainer notices.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">5. PROHIBITED USES</h2>
        <p className="mb-2">You may use our Service only for lawful purposes. You agree not to use the Service:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>In any way that violates any applicable local, national, or international law.</li>
          <li>To transmit or procure the sending of any unsolicited advertising, spam, or promotional material.</li>
          <li>To introduce any viruses, trojan horses, worms, or other materials which are malicious or technologically harmful.</li>
          <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service or connected databases.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">6. INTELLECTUAL PROPERTY</h2>
        <p className="mb-4">
          The Service and its original content (excluding client logos, client branding assets, or user-provided copy), features, and functionality are and will remain the exclusive property of Leor Media and its licensors. Our trademarks and brand elements may not be used in connection with any product or service without the prior written consent of Leor Media.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">7. LIMITATION OF LIABILITY</h2>
        <p className="mb-4">
          EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE ARISING OUT OF OR IN CONNECTION WITH CLIENT ENGAGEMENTS OR SERVICE DELIVERY. IN NO EVENT WILL LIABILITY EXCEED THE TOTAL FEES PAID BY THE CLIENT TO LEOR MEDIA FOR THE SPECIFIC PROJECT GIVING RISE TO LIABILITY.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">8. GOVERNING LAW</h2>
        <p className="mb-4">
          These Terms shall be governed and construed in accordance with the laws of MVP Colony, Visakhapatnam, Andhra Pradesh, India, without regard to its conflict of law provisions. Any legal actions or disputes shall be subject to the exclusive jurisdiction of the courts located in Visakhapatnam, Andhra Pradesh, India.
        </p>

        <h2 className="font-bold text-xl mt-8 mb-2">9. CONTACT US</h2>
        <p className="mb-6">
          Please send your feedback, comments, or requests for technical support by email to:{" "}
          <a href="mailto:mail@leormedia.com" className="text-primary hover:underline font-semibold">
            mail@leormedia.com
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default TermsnConditions;