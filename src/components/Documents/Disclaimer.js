import React from "react";
import { Helmet } from "react-helmet-async";
import shippinganddelivery from "../../assets/Thumbnails.png";

const title = "Disclaimer | Leor Media";
const description =
  "Read the official Disclaimer of Leor Media. Understand our policies, responsibilities, and terms regarding our event management, digital marketing, and branding services.";
const keywords =
  "disclaimer, Leor Media, terms and conditions, service policies, Visakhapatnam event management, digital marketing agency, branding guidelines";
const ogImage = shippinganddelivery;
const canonical = "https://leormedia.com/Legal/disclaimer";

const Disclaimer = () => {
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
        <h1 className="text-center py-10 font-bold text-3xl"> DISCLAIMER </h1>
        <p className="text-sm text-gray-500 mb-6">Last updated: June 2026</p>

        <h2 className="font-bold text-xl mt-6 mb-2">1. WEBSITE DISCLAIMER</h2>
        <p className="mb-4">
          The information provided by Leor Media (“Company”, “we”, “our”, “us”) on{" "}
          <a href="https://leormedia.com" className="text-primary hover:underline">
            https://leormedia.com
          </a>{" "}
          (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>
        <p className="mb-4 font-semibold">
          UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">2. PROFESSIONAL SERVICES & MARKETING DISCLAIMER</h2>
        <p className="mb-4">
          Leor Media offers professional event management, digital marketing, strategic advertising, and branding services. While we work diligently to build, optimize, and market your campaigns, please note:
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            <strong>Digital Marketing & ROI:</strong> We do not guarantee specific sales, revenue growth, search engine rankings (SEO), or conversion rates. Digital marketing performance depends on external factors beyond our control, including changing search engine algorithms, platform policies (Google, Facebook, Instagram), user behavior, and industry competition.
          </li>
          <li>
            <strong>Design & Copy Proofing:</strong> Clients are responsible for final proofreading and approving all creative assets, logos, copy, branding booklets, and packaging designs before they are published, launched, or sent for printing. Leor Media is not liable for typographical errors, design mistakes, or layout issues once the client has given final approval.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">3. EVENT MANAGEMENT & THIRD-PARTY VENDORS</h2>
        <p className="mb-4">
          For our event planning and luxury wedding services, Leor Media coordinates and acts as a facilitator with various third-party vendors (including but not limited to decorators, caterers, sound/AV suppliers, florists, and venues):
        </p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
          <li>
            We are not responsible or liable for any service delays, defaults, quality issues, or contract breaches by third-party vendors, venues, or independent contractors.
          </li>
          <li>
            Leor Media is not liable for any cancellations, delays, or issues arising from weather conditions, political situations, public health emergencies, force majeure, or other unforeseen external disruptions.
          </li>
        </ul>

        <h2 className="font-bold text-xl mt-6 mb-2">4. EXTERNAL LINKS DISCLAIMER</h2>
        <p className="mb-4">
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
        <p className="mb-4">
          WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">5. TESTIMONIALS DISCLAIMER</h2>
        <p className="mb-4">
          The Site contains testimonials by users of our services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our services. We do not claim, and you should not assume, that all users will have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">6. ERRORS AND OMISSIONS DISCLAIMER</h2>
        <p className="mb-4">
          While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Leor Media is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information.
        </p>

        <h2 className="font-bold text-xl mt-6 mb-2">7. LOGOS AND TRADEMARKS DISCLAIMER</h2>
        <p className="mb-4">
          All logos and trademarks of third parties referenced on{" "}
          <a href="https://leormedia.com" className="text-primary hover:underline">
            https://leormedia.com
          </a>{" "}
          are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement, or sponsorship of Leor Media by such owners.
        </p>

        <h2 className="font-bold text-xl mt-8 mb-2">8. CONTACT US</h2>
        <p className="mb-6">
          Should you have any feedback, comments, requests for support, or other inquiries, please contact us by email:{" "}
          <a href="mailto:leormedia@gmail.com" className="text-primary hover:underline font-semibold">
            leormedia@gmail.com
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Disclaimer;
