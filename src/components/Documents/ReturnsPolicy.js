import React from 'react';
import { Helmet } from "react-helmet-async";
import shippinganddelivery from "../../assets/Thumbnails.png";

const title = "Cancellation & Refund Policy | Leor Media";
const description =
  "Read Leor Media's Cancellation & Refund Policy. Understand our terms regarding bookings, deposit refunds, design services, and custom printing cancellations.";
const keywords =
  "cancellation policy, refund policy, Leor Media, event booking cancellations, design service refund, Visakhapatnam event agency";
const ogImage = shippinganddelivery;
const canonical = "https://leormedia.com/Legal/returns-policy";

const ReturnsPolicy = () => {
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

      <div className='disclaimer px-5 mt-6 text-black mx-4 leading-relaxed'>
        <h1 className="text-center py-10 font-bold text-3xl"> Cancellation & Refund Policy </h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: June 2026</p>

        <p className="mb-4">
          At Leor Media, we strive to deliver premium event planning, branding, and digital marketing services. Because our work involves custom strategy, booking resources, and vendor coordination, our Cancellation & Refund Policy is structured as follows:
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">1. EVENT MANAGEMENT & WEDDING PLANNING</h2>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            <strong>Booking Deposits:</strong> The initial booking deposit or advance payment is non-refundable. This deposit secures your event date, assigns our staff, and allows us to initiate coordinator deposits with third-party vendors and venues.
          </li>
          <li>
            <strong>Event Cancellations:</strong> If you cancel your event:
            <ul className="list-circle list-inside pl-6 mt-1 space-y-1">
              <li>More than 30 days before the event: You will not be billed for any remaining balance, but the initial deposit is forfeited.</li>
              <li>Within 30 days of the event: The client is responsible for paying all incurred expenses, supplier deposits, and a prorated coordinator fee based on work completed up to the date of cancellation.</li>
            </ul>
          </li>
          <li>
            <strong>Postponement:</strong> If you postpone your event, we will do our best to accommodate the new date. Any additional vendor fees, booking difference, or coordination charges due to the date change will be billed to the client.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">2. BRANDING & CREATIVE DESIGN SERVICES</h2>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            <strong>Design Retainers:</strong> Branding and graphic design projects (including logo design, packaging, and corporate identity assets) are customized to client requirements. Once work has officially commenced, the project payment is non-refundable.
          </li>
          <li>
            <strong>Custom Printing & Production:</strong> Orders for physical print collaterals (like custom brochures, folders, diaries, calendars, or business cards) are customized. Once a client approves the final print mockups and the files are sent to press, the order cannot be canceled, and no refunds or exchanges will be provided.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">3. DIGITAL MARKETING & STRATEGIC ADVERTISING</h2>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            <strong>Retainer Packages:</strong> Ongoing digital marketing services (SEO, Social Media Management, Ads management) are structured as monthly cycles. You can cancel your monthly retainer by providing a 30-day written notice.
          </li>
          <li>
            <strong>Refunds:</strong> Payments for active or completed monthly marketing cycles are non-refundable. No refunds will be provided for third-party advertising spend (such as Google Ads or Meta Ads budgets) once credited or spent on the respective advertising platforms.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">4. REFUND PROCESSING</h2>
        <p className="mb-4">
          In any scenario where a refund is approved in writing by Leor Media management (due to service issues or billing errors):
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            Refund requests must be reported to our Billing team within 7 days of payment.
          </li>
          <li>
            Approved refunds will be processed back to the original payment source within 7–10 business days.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-8 mb-2">5. CONTACT US</h2>
        <p className="mb-6">
          If you have questions about cancellations or refunds, please reach out to us at:{" "}
          <a href="mailto:mail@leormedia.com" className="text-primary hover:underline font-semibold">
            mail@leormedia.com
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default ReturnsPolicy;