import React from "react";
import { Helmet } from "react-helmet-async";
import shippinganddelivery from "../../assets/Thumbnails.png";

const title = "Shipping & Delivery Policy | Leor Media";
const description =
  "Read Leor Media's Shipping & Delivery Policy. Learn about our digital project deliveries, physical print shipments, and event setup logistics.";
const keywords =
  "shipping policy, delivery policy, Leor Media, service delivery, Visakhapatnam print shipping, event delivery logistics";
const ogImage = shippinganddelivery;
const canonical = "https://leormedia.com/Legal/shipping-and-delivery";

const ShippingandDelivery = () => {
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

      <div className="disclaimer px-5 mt-6 text-black mx-4 leading-relaxed">
        <h1 className="text-center py-10 font-bold text-3xl">
          Shipping & Delivery Policy
        </h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: June 2026</p>

        <p className="mb-4">
          Leor Media provides both digital services (branding designs, digital marketing, website development) and physical deliverables (printed branding materials, brochures, corporate gifts, event setups). The shipping and delivery processes for these offerings are defined below:
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">1. DIGITAL DELIVERABLES</h2>
        <p className="mb-4">
          All creative designs, branding guidelines, digital advertisements, social media assets, and analytics reports are delivered digitally:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            <strong>Delivery Method:</strong> Assets are sent via email, shared secure folders (Google Drive, Dropbox), or directly uploaded to your client management portal.
          </li>
          <li>
            <strong>Timeline:</strong> Delivery schedules are established in the project contract. Once design files are approved, final production files are sent within 2 business days.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">2. PHYSICAL PRINT COLLATERALS & BRANDING PRODUCTS</h2>
        <p className="mb-4">
          For clients ordering printed materials (such as custom packaging, business cards, corporate booklets, calendars, diaries, roll-ups, or leaflets):
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            <strong>Production Lead Time:</strong> Printing commences immediately after the client provides final digital proof approval. Production typically takes 3–7 business days depending on the volume and type of print.
          </li>
          <li>
            <strong>Shipping & Handling:</strong> Physical items are securely packaged and shipped to your specified office or business address.
          </li>
          <li>
            <strong>Shipping Timelines:</strong> 
            <ul className="list-circle list-inside pl-6 mt-1 space-y-1">
              <li>Local Deliveries (Visakhapatnam): 1–2 business days post-production.</li>
              <li>Domestic Shipments (India): 3–7 business days post-production, depending on the courier service.</li>
            </ul>
          </li>
          <li>
            <strong>Tracking:</strong> Tracking numbers and shipping details will be emailed to you immediately after dispatch.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">3. PHYSICAL EVENT SETUPS & DECOR LOGISTICS</h2>
        <p className="mb-4">
          For event management and luxury wedding planning:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            All physical decor, floral work, sound/light stages, and branding banners are transported, delivered, and assembled directly at the event venue.
          </li>
          <li>
            Delivery and setup times will be strictly coordinated with the venue managers according to the timetable in the event contract.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-8 mb-2">4. CONTACT US</h2>
        <p className="mb-6">
          If you have questions about order delivery or shipments, please contact our logistics team at:{" "}
          <a href="mailto:mail@leormedia.com" className="text-primary hover:underline font-semibold">
            mail@leormedia.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default ShippingandDelivery;
