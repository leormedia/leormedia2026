// PageData.jsx - Central Registry for Application Data
import {
  ServicesCoverImage,
  WeddingPlannersCoverimage,
} from "../../assets/data/Imagedata";
import {
  Webdevelopmenticon,
  DigitalmarketingIcon,
  Brandingicon,
  Advertisingicon,
  DefaultIcon,
} from "../../assets/data/icon_data";

// Main Services Overview Page Data
export const ServicesPageDetails = {
  coverimage: ServicesCoverImage,
  title: "Services",
  subtitle:
    "Leor Media is your reliable partner for innovative, scalable, and high-performance web development solutions.",
  coverImage: {
    src: WeddingPlannersCoverimage,
    style: {
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
  SeoName: {
    seotitle: "services",
  },
  section2: {
    tagline: "Web Development That Drives Results.",
    heading: "Turn Your Vision Into a Powerful Web Experience.",
    description:
      "At Leor Media, we specialize in building robust, secure, and scalable web applications aligned with your business objectives.",
  },
  services: [
    {
      icon: Webdevelopmenticon,
      title: "Events",
      description: "Vizag’s premier event management partner.",
      link: "/services/wedding-planners",
    },
    {
      icon: DefaultIcon,
      title: "Mobile Application",
      description: "Create seamless mobile experiences.",
      link: "https://www.vivahamco.com",
    },
    {
      icon: DigitalmarketingIcon,
      title: "Digital Media Marketing",
      description: "Boost your online presence with strategic campaigns.",
      link: "/services/digital-media-marketing",
    },
    {
      icon: Brandingicon,
      title: "Branding",
      description: "Create a lasting impression with strategic branding.",
      link: "/services/branding",
    },
    {
      icon: Advertisingicon,
      title: "Advertising",
      description: "Run targeted ad campaigns across platforms.",
      link: "/services/advertisement",
    },
  ],
};
