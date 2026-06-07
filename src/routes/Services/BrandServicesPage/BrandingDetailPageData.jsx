import {
  BrandingCoverImage,
  BrandAuditImg,
  BrandStrategyImg,
  BrandIdentityImg,
  BrandPositioningImg,
  BrandActivationsImg,
  InfilmBrandingImg,
  CorporateBrandingImg,
  SocialCreativesImg,
  PostersImg,
  LabelingImg,
  CalendarsImg,
  FoldersImg,
  DiariesImg,
  BulletinImg,
  BookletsImg,
  CatalogueImg,
  BrochureImg,
  LeafletsImg,
} from "../../../assets/data/Imagedata";

import {
  faCheckCircle,
  faSearch,
  faSearchDollar,
  faSitemap,
  faCommentAlt,
  faLightbulb,
  faIdBadge,
  faMapMarker,
  faBullseye,
  faFilm,
  faBuilding,
  faImages,
  faImage,
  faTag,
  faCalendarAlt,
  faFolderOpen,
  faBook,
  faNewspaper,
  faBookOpen,
  faFileAlt,
  faFileLines,
  faProjectDiagram,
} from "../../../assets/data/icon_data";

// Branding Page Data
export const BrandingCompany = {
  SeoName: { seotitle:"branding" },
  coverimage: BrandingCoverImage,
  title:"Branding Services in Visakhapatnam | Leor Media",
  subtitle:"Building iconic brands through strategic audit, identity design, and creative activations.",
  coverImage: { src: BrandingCoverImage, style: { backgroundSize:"cover", backgroundPosition:"center" } },
  section2: {
    tagline:"Your Brand, Our Passion",
    heading:"End-to-End Brand Strategy & Designing",
    description:"Leor Media helps you define, design, and deliver a brand that resonates with your audience and stands out in the marketplace.",
  },
  services: [
    { icon: faSearch, title:"Brand Audit", description:"Comprehensive audit of your brand.", link:"/services/branding/brand-audit" },
    { icon: faLightbulb, title:"Brand Strategy", description:"Strategic planning for brand growth.", link:"/services/branding/brand-strategy" },
    { icon: faIdBadge, title:"Brand Identity", description:"Creating a unique brand identity.", link:"/services/branding/brand-identity" },
    { icon: faMapMarker, title:"Brand Positioning", description:"Strategically positioning your brand.", link:"/services/branding/brand-positioning" },
    { icon: faBullseye, title:"Brand Activations", description:"Engaging brand activation events.", link:"/services/branding/brand-activations" },
    { icon: faFilm, title:"Infilm Branding", description:"Strategic branding within films.", link:"/services/branding/infilm-branding" },
    { icon: faBuilding, title:"Corporate Branding", description:"Professional corporate brand solutions.", link:"/services/branding/corporate-branding" },
    // Designing
    { icon: faImages, title:"Social Media Creatives", description:"Creative designs for social media.", link:"/services/branding/social-media-creatives" },
    { icon: faImage, title:"Posters", description:"High-quality poster designs.", link:"/services/branding/posters" },
    { icon: faTag, title:"Labeling", description:"Custom product labeling and design.", link:"/services/branding/labeling" },
    { icon: faCalendarAlt, title:"Calendars", description:"Branded calendar design.", link:"/services/branding/calendars" },
    { icon: faFolderOpen, title:"Folders", description:"Corporate folder and stationery design.", link:"/services/branding/folders" },
    { icon: faBook, title:"Diaries", description:"Branded diary and notebook design.", link:"/services/branding/diaries" },
    { icon: faNewspaper, title:"Bulletin", description:"Corporate bulletin and newsletter design.", link:"/services/branding/bulletin" },
    { icon: faBookOpen, title:"Booklets", description:"Informative booklet design.", link:"/services/branding/booklets" },
    { icon: faFileAlt, title:"Catalogue", description:"Professional product catalogue design.", link:"/services/branding/catalogue" },
    { icon: faBook, title:"Brochure", description:"Creative brochure design and layouts.", link:"/services/branding/brochure" },
    { icon: faFileLines, title:"Leaflets", description:"Impactful leaflet design.", link:"/services/branding/leaflets" },
  ],
};

// Generic Branding Detail Page Data (Original fallback)
export const GenericBrandingDetailPageData = {
  SeoName: { seotitle:"branding" },
  coverimage: BrandingCoverImage,
  title:"Branding Solutions",
  subtitle:"Define and design your brand's unique identity with Leor Media.",
  coverImage: { src: BrandingCoverImage, style: { backgroundSize:"cover", backgroundPosition:"center" } },
  section2: { tagline:"Build Your Identity", heading:"Expert Branding Services", description:"We help businesses create a strong and memorable brand presence through strategic design and communication." },
  services: [
    { icon: faCheckCircle, title:"Identity Design", description:"Logos, color palettes, and typography.", details: ["Logo Design","Brand Guidelines","Visual Style"], link:"/contactus" },
    { icon: faProjectDiagram, title:"Brand Strategy", description:"Strategic roadmaps for brand success.", details: ["Market Research","Positioning","Messaging"], link:"/contactus" },
  ],
  pricing: [{ title:"Branding Pack", price:"Contact Us", features: ["Identity Design","Strategy Workshop","Collateral Design","Digital Integration"], link:"/contactus", highlighted: true }],
  faqs: [{ question:"Why is branding important?", answer:"Branding creates a unique identity that helps you connect with your audience and build long-term trust." }],
};

export const BrandAuditPageData = {
  SeoName: {
    seotitle:"brand-audit",
  },
  title:"Brand Audit",
  subtitle:"Premium Brand Audit services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Brand Audit Excellence",
    heading:"Enhance Your Brand with Brand Audit",
    description:"Leor Media provides specialized Brand Audit solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Brand Audit Expertise",
      description:"Professional approach to Brand Audit.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Brand Audit important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandStrategyPageData = {
  SeoName: { seotitle:"brand-strategy" },
  title:"Data-Driven Brand Strategy & Positioning",
  subtitle:"Transform your business into a powerful brand with our strategic framework designed for long-term growth.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"BLUEPRINT FOR SUCCESS",
    heading:"Strategic Brand Foundation",
    description:"A great brand isn't built by accident. At Leor Media, we dive deep into market research, competitor analysis, and consumer behavior to craft a brand strategy that resonates and lasts.",
  },
  services: [
    { title:"Market Research", description:"In-depth analysis of your industry and trends.", icon: faSearch },
    { title:"Competitor Benchmarking", description:"Identifying gaps and opportunities in the market.", icon: faSearchDollar },
    { title:"Brand Architecture", description:"Organizing your brand portfolio for clarity.", icon: faSitemap },
    { title:"Voice & Messaging", description:"Defining how your brand speaks to the world.", icon: faCommentAlt },
  ],
  faqs: [
    { question:"Why do I need a brand strategy?", answer:"A strategy ensures consistency across all touchpoints, builds trust, and helps you command premium pricing." },
    { question:"How long does the strategy process take?", answer:"Typically, a comprehensive brand strategy takes 4-8 weeks depending on the complexity of the business." },
  ],
};

export const BrandIdentityPageData = {
  SeoName: {
    seotitle:"brand-identity",
  },
  title:"Brand Identity",
  subtitle:"Premium Brand Identity services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Brand Identity Excellence",
    heading:"Enhance Your Brand with Brand Identity",
    description:"Leor Media provides specialized Brand Identity solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Brand Identity Expertise",
      description:"Professional approach to Brand Identity.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Brand Identity important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandPositioningPageData = {
  SeoName: {
    seotitle:"brand-positioning",
  },
  title:"Brand Positioning",
  subtitle:"Premium Brand Positioning services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Brand Positioning Excellence",
    heading:"Enhance Your Brand with Brand Positioning",
    description:"Leor Media provides specialized Brand Positioning solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Brand Positioning Expertise",
      description:"Professional approach to Brand Positioning.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Brand Positioning important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandActivationsPageData = {
  SeoName: {
    seotitle:"brand-activations",
  },
  title:"Brand Activations",
  subtitle:"Premium Brand Activations services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Brand Activations Excellence",
    heading:"Enhance Your Brand with Brand Activations",
    description:"Leor Media provides specialized Brand Activations solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Brand Activations Expertise",
      description:"Professional approach to Brand Activations.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Brand Activations important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const InfilmBrandingPageData = {
  SeoName: {
    seotitle:"infilm-branding",
  },
  title:"Infilm Branding",
  subtitle:"Premium Infilm Branding services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Infilm Branding Excellence",
    heading:"Enhance Your Brand with Infilm Branding",
    description:"Leor Media provides specialized Infilm Branding solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Infilm Branding Expertise",
      description:"Professional approach to Infilm Branding.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Infilm Branding important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const CorporateBrandingPageData = {
  SeoName: {
    seotitle:"corporate-branding",
  },
  title:"Corporate Branding",
  subtitle:"Premium Corporate Branding services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Corporate Branding Excellence",
    heading:"Enhance Your Brand with Corporate Branding",
    description:"Leor Media provides specialized Corporate Branding solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Corporate Branding Expertise",
      description:"Professional approach to Corporate Branding.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Corporate Branding important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const SocialMediaCreativesPageData = {
  SeoName: {
    seotitle:"social-media-creatives",
  },
  title:"Social Media Creatives",
  subtitle:"Premium Social Media Creatives services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Social Media Creatives Excellence",
    heading:"Enhance Your Brand with Social Media Creatives",
    description:"Leor Media provides specialized Social Media Creatives solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Social Media Creatives Expertise",
      description:"Professional approach to Social Media Creatives.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Social Media Creatives important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const PostersPageData = {
  SeoName: {
    seotitle:"posters",
  },
  title:"Posters",
  subtitle:"Premium Posters services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Posters Excellence",
    heading:"Enhance Your Brand with Posters",
    description:"Leor Media provides specialized Posters solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Posters Expertise",
      description:"Professional approach to Posters.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Posters important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const LabelingPageData = {
  SeoName: {
    seotitle:"labeling",
  },
  title:"Labeling",
  subtitle:"Premium Labeling services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Labeling Excellence",
    heading:"Enhance Your Brand with Labeling",
    description:"Leor Media provides specialized Labeling solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Labeling Expertise",
      description:"Professional approach to Labeling.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Labeling important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const CalendarsPageData = {
  SeoName: {
    seotitle:"calendars",
  },
  title:"Calendars",
  subtitle:"Premium Calendars services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Calendars Excellence",
    heading:"Enhance Your Brand with Calendars",
    description:"Leor Media provides specialized Calendars solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Calendars Expertise",
      description:"Professional approach to Calendars.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Calendars important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const FoldersPageData = {
  SeoName: {
    seotitle:"folders",
  },
  title:"Folders",
  subtitle:"Premium Folders services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Folders Excellence",
    heading:"Enhance Your Brand with Folders",
    description:"Leor Media provides specialized Folders solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Folders Expertise",
      description:"Professional approach to Folders.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Folders important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const DiariesPageData = {
  SeoName: {
    seotitle:"diaries",
  },
  title:"Diaries",
  subtitle:"Premium Diaries services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Diaries Excellence",
    heading:"Enhance Your Brand with Diaries",
    description:"Leor Media provides specialized Diaries solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Diaries Expertise",
      description:"Professional approach to Diaries.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Diaries important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BulletinPageData = {
  SeoName: {
    seotitle:"bulletin",
  },
  title:"Bulletin",
  subtitle:"Premium Bulletin services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Bulletin Excellence",
    heading:"Enhance Your Brand with Bulletin",
    description:"Leor Media provides specialized Bulletin solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Bulletin Expertise",
      description:"Professional approach to Bulletin.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Bulletin important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BookletsPageData = {
  SeoName: {
    seotitle:"booklets",
  },
  title:"Booklets",
  subtitle:"Premium Booklets services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Booklets Excellence",
    heading:"Enhance Your Brand with Booklets",
    description:"Leor Media provides specialized Booklets solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Booklets Expertise",
      description:"Professional approach to Booklets.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Booklets important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const CataloguePageData = {
  SeoName: {
    seotitle:"catalogue",
  },
  title:"Catalogue",
  subtitle:"Premium Catalogue services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Catalogue Excellence",
    heading:"Enhance Your Brand with Catalogue",
    description:"Leor Media provides specialized Catalogue solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Catalogue Expertise",
      description:"Professional approach to Catalogue.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Catalogue important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrochurePageData = {
  SeoName: {
    seotitle:"brochure",
  },
  title:"Brochure",
  subtitle:"Premium Brochure services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Brochure Excellence",
    heading:"Enhance Your Brand with Brochure",
    description:"Leor Media provides specialized Brochure solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Brochure Expertise",
      description:"Professional approach to Brochure.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Brochure important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const LeafletsPageData = {
  SeoName: {
    seotitle:"leaflets",
  },
  title:"Leaflets",
  subtitle:"Premium Leaflets services by Leor Media to elevate your brand presence.",
  coverimage: BrandingCoverImage,
  section2: {
    tagline:"Leaflets Excellence",
    heading:"Enhance Your Brand with Leaflets",
    description:"Leor Media provides specialized Leaflets solutions tailored to your business goals.",
  },
  services: [
    {
      icon: faCheckCircle,
      title:"Leaflets Expertise",
      description:"Professional approach to Leaflets.",
      details: ["Strategic Analysis","Creative Execution","Impact Assessment"],
      link:"/contactus",
    },
  ],
  pricing: [
    {
      title:"Custom Package",
      price:"Contact Us",
      features: ["Personalized Consultation","Creative Assets","Brand Support"],
      link:"/contactus",
      highlighted: true,
    },
  ],
  faqs: [
    {
      question:"Why is Leaflets important for my brand?",
      answer:"It helps in creating a consistent and professional brand image that resonates with your audience.",
    },
  ],
};

export const BrandingDetailPageData = {"brand-audit": BrandAuditPageData,"brand-strategy": BrandStrategyPageData,"brand-identity": BrandIdentityPageData,"brand-positioning": BrandPositioningPageData,"brand-activations": BrandActivationsPageData,"infilm-branding": InfilmBrandingPageData,"corporate-branding": CorporateBrandingPageData,"social-media-creatives": SocialMediaCreativesPageData,"posters": PostersPageData,"labeling": LabelingPageData,"calendars": CalendarsPageData,"folders": FoldersPageData,"diaries": DiariesPageData,"bulletin": BulletinPageData,"booklets": BookletsPageData,"catalogue": CataloguePageData,"brochure": BrochurePageData,"leaflets": LeafletsPageData,
};

// Assign unique cover images to each subpage data object
BrandAuditPageData.coverimage = BrandAuditImg;
BrandStrategyPageData.coverimage = BrandStrategyImg;
BrandIdentityPageData.coverimage = BrandIdentityImg;
BrandPositioningPageData.coverimage = BrandPositioningImg;
BrandActivationsPageData.coverimage = BrandActivationsImg;
InfilmBrandingPageData.coverimage = InfilmBrandingImg;
CorporateBrandingPageData.coverimage = CorporateBrandingImg;
SocialMediaCreativesPageData.coverimage = SocialCreativesImg;
PostersPageData.coverimage = PostersImg;
LabelingPageData.coverimage = LabelingImg;
CalendarsPageData.coverimage = CalendarsImg;
FoldersPageData.coverimage = FoldersImg;
DiariesPageData.coverimage = DiariesImg;
BulletinPageData.coverimage = BulletinImg;
BookletsPageData.coverimage = BookletsImg;
CataloguePageData.coverimage = CatalogueImg;
BrochurePageData.coverimage = BrochureImg;
LeafletsPageData.coverimage = LeafletsImg;

