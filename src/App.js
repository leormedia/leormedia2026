import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import LogoLoader from "./components/LogoLoader";
import seoData from "./assets/data/seo.json";

// Import data detail configs statically
import { WeddingPlannersDetailPageData } from "./routes/Services/WeddingPlannersPage/WeddingPlannersDetailPageData.jsx";
import { AdvertisementDetailPageData } from "./routes/Services/AdvertisingPage/AdvertisementDetailPageData.jsx";
import { BrandingDetailPageData } from "./routes/Services/BrandServicesPage/BrandingDetailPageData.jsx";
import { DigitalMediaMarketingDetailPageData } from "./routes/Services/DigitalMarketingPage/DigitalMediaMarketingDetailPageData.jsx";
import { EventsDetailPageData } from "./routes/Services/EventsPage/EventsDetailPageData.jsx";

// Hook helper
import PrivateRoute from "./hooks/PrivateRoute";

// Lazy load route layouts & components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const PrivacyPolicy = lazy(() => import("./components/Documents/PrivacyPolicy"));
const TermsnConditions = lazy(() => import("./components/Documents/TermsnConditions"));
const Disclaimer = lazy(() => import("./components/Documents/Disclaimer"));
const ShippingandDelivery = lazy(() => import("./components/Documents/ShippingandDelivery"));
const ReturnPolicy = lazy(() => import("./components/Documents/ReturnsPolicy"));
const Error404 = lazy(() => import("./components/Tools/Error404"));

const Home = lazy(() => import("./routes/Home.js"));
const Aboutus = lazy(() => import("./routes/Aboutus"));
const Contactus = lazy(() => import("./routes/Contactus.js"));
const Services = lazy(() => import("./routes/Services/Services.js"));
const Blog = lazy(() => import("./routes/Blogs/Blog"));
const BlogFullPost = lazy(() => import("./routes/Blogs/BlogFullPost"));
const FAQ = lazy(() => import("./routes/Faqs"));
const GetQuotation = lazy(() => import("./routes/GetQuotation"));

// Service Main Pages
const WeddingPlanners = lazy(() => import("./routes/Services/WeddingPlannersPage/WeddingPlanners.jsx"));
const DigitalMarketing = lazy(() => import("./routes/Services/DigitalMarketingPage/DigitalMarketing.jsx"));
const Advertising = lazy(() => import("./routes/Services/AdvertisingPage/Advertising.jsx"));
const BrandServices = lazy(() => import("./routes/Services/BrandServicesPage/BrandServices.jsx"));
const Events = lazy(() => import("./routes/Services/EventsPage/Events.jsx"));

// Service Subpages
const SubpagesDigitalMarketing = lazy(() => import("./routes/Services/DigitalMarketingPage/SubpagesDigitalMarketing.js"));
const SubpagesWeddingplanners = lazy(() => import("./routes/Services/WeddingPlannersPage/SubpagesWeddingplanners.js"));
const SubpagesAdvertising = lazy(() => import("./routes/Services/AdvertisingPage/SubpagesAdvertising.js"));
const SubpagesBranding = lazy(() => import("./routes/Services/BrandServicesPage/SubpagesBranding.js"));
const SubpagesEvents = lazy(() => import("./routes/Services/EventsPage/SubpagesEvents.js"));

// Authentication / Admin Dashboard Components
const AdminNavbar = lazy(() => import("./routes/auth/Navbar/AdminNavbar"));
const Login = lazy(() => import("./routes/auth/login"));
const Dashboard = lazy(() => import("./routes/auth/dashboard"));
const BlogsAdmin = lazy(() => import("./routes/auth/Admin/BlogsAdmin"));
const Leads = lazy(() => import("./routes/auth/Admin/Leads"));
const AdminContactus = lazy(() => import("./routes/auth/Admin/AdminContactus"));
const GoogleAnalytics = lazy(() => import("./routes/auth/Admin/GoogleAnalytics"));

const routes = [
  { path: "/", element: <Home /> },
  { path: "/*", element: <Error404 /> },
  
  // Admin Routes
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
  { path: "/auth/dashboard/blogs", element: <PrivateRoute><BlogsAdmin /></PrivateRoute> },
  { path: "/auth/leads", element: <PrivateRoute><Leads /></PrivateRoute> },
  { path: "/auth/contactus", element: <PrivateRoute><AdminContactus /></PrivateRoute> },
  { path: "/auth/google-analytics", element: <PrivateRoute><GoogleAnalytics /></PrivateRoute> },



  { path: "/blogs", element: <Blog /> },
  { path: "/blogs/:slug", element: <BlogFullPost /> },

  { path: "/aboutus", element: <Aboutus /> },
  { path: "/contactus", element: <Contactus /> },
  { path: "/get-quotation", element: <GetQuotation /> },


  { path: "/Legal/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/Legal/terms-and-conditions", element: <TermsnConditions /> },
  { path: "/Legal/return-policy", element: <ReturnPolicy /> },
  { path: "/Legal/shipping-and-delivery", element: <ShippingandDelivery /> },
  { path: "/Legal/disclaimer", element: <Disclaimer /> },

  { path: "/services", element: <Services /> },
  { path: "/frequently-asked-questions", element: <FAQ /> },


  /*---------Wedding Planners---------*/
  { path: "/services/wedding-planners", element: <WeddingPlanners /> },
  {
    path: "/services/wedding-planners/:category",
    element: <SubpagesWeddingplanners pageData={WeddingPlannersDetailPageData} seoData={seoData} />,
  },
  /*---------Wedding Planners End---------*/




  /*---------Digital Media Marketing---------*/
  {
    path: "/services/digital-media-marketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/services/digital-media-marketing/:category",
    element: (
      <SubpagesDigitalMarketing
        pageData={DigitalMediaMarketingDetailPageData}
        seoData={seoData}
      />
    ),
  },
  /*---------Digital Media Marketing End---------*/

  /*---------Branding---------*/
  { path: "/services/branding", element: <BrandServices /> },
  {
    path: "/services/branding/:category",
    element: <SubpagesBranding pageData={BrandingDetailPageData} seoData={seoData} />,
  },
  /*---------Branding End---------*/

  /*---------Advertisement---------*/
  { path: "/services/advertisement", element: <Advertising /> },
  {
    path: "/services/advertisement/:category",
    element: (
      <SubpagesAdvertising pageData={AdvertisementDetailPageData} seoData={seoData} />
    ),
  },
  /*---------Advertisement End---------*/

  /*---------Events---------*/
  { path: "/services/events", element: <Events /> },
  {
    path: "/services/events/:category",
    element: <SubpagesEvents pageData={EventsDetailPageData} seoData={seoData} />,
  },
  /*---------Events End---------*/
];

export function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem("hasVisited"));

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 4500); // Wait for text animation and logo reveal
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Any route that starts with "/auth" except the login page itself
  const isAuthRoute = location.pathname.startsWith("/auth") && location.pathname !== "/auth/login";

  return (
    <>
      <LogoLoader isLoading={isLoading} />
      <Suspense fallback={<div className="fixed inset-0 bg-white z-[99]" />}>
        {isAuthRoute && <AdminNavbar />}
        {!isAuthRoute && location.pathname !== "/auth/login" && <Navbar />}

        <div className="flex flex-1">
          <div
            className={`flex-1 min-w-0 transition-all duration-300 ${
              isAuthRoute ? "mt-14 md:ml-64" : "mt-0"
            }`}
          >
            <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
              <Routes location={location} key={location.pathname}>
                {routes.map((route, index) => (
                  <Route 
                    key={index} 
                    path={route.path} 
                    element={
                      <PageTransition>
                        <Suspense fallback={<div className="fixed inset-0 bg-white z-[99]" />}>
                          {route.element}
                        </Suspense>
                      </PageTransition>
                    } 
                  />
                ))}
              </Routes>
            </AnimatePresence>

            {!isAuthRoute && location.pathname !== "/auth/login" && <Footer />}
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default App;
