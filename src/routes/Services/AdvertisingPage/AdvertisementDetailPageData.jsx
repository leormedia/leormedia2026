import { AdvertisitngCoverImage } from"../../../assets/data/Imagedata";
import AtlOohImg from"./AdvertisingImages/atl_ooh.png";
import TransitMediaImg from"./AdvertisingImages/transit_media.png";
import StrategicFormatImg from"./AdvertisingImages/strategic_format.png";
import PrintMediaImg from"./AdvertisingImages/print_media.png";
import ElectronicMediaImg from"./AdvertisingImages/electronic_media.png";
import BtlAdvertisingImg from"./AdvertisingImages/btl_advertising.png";
import {
  faAd,
  faBuilding,
  faBus,
  faLandmark,
  faStore,
  faTrain,
  faPlaneDeparture,
  faTaxi,
  faTruck,
  faGraduationCap,
  faUsers,
  faSearch,
  faShoppingCart,
  faPeopleArrows,
  faNewspaper,
  faBookOpen,
  faFileAlt,
  faEnvelope,
  faSearchDollar,
  faFilm,
  faTv,
  faVideo,
  faRadio,
  faBullhorn,
  faLightbulb,
  faGlobe,
  faPhone,
  faMapMarkerAlt,
} from"@fortawesome/free-solid-svg-icons";

// Advertisement Page Data
export const AdvertisingCompany = {
  SeoName: {
    seotitle:"advertising",
  },
  coverimage: AdvertisitngCoverImage,
  title:"Advertisement Services in Visakhapatnam | Leor Media",
  subtitle:"Leor Media offers comprehensive ATL, BTL, and Digital advertising solutions to help your brand reach the right audience across all channels.",
  coverImage: {
    src: AdvertisitngCoverImage,
    style: {
      backgroundSize:"cover",
      backgroundPosition:"center",
    },
  },
  section2: {
    tagline:"Impactful Advertising Solutions",
    heading:"Strategic ATL, BTL & Transit Media Advertising",
    description:"From massive billboards and transit media to strategic kiosks and digital media buying, we provide end-to-end advertising services tailored to your brand's growth in Visakhapatnam and beyond.",
  },
  services: [
    { icon: faAd, title:"ATL/OOH Advertisement", description:"High-visibility display boards and outdoor advertising.", link:"/services/advertisement/atl-ooh-advertisement" },
    { icon: faBullhorn, title:"BTL Advertisement", description:"Direct brand promotion and experiential marketing.", link:"/services/advertisement/btl-advertisement" },
    { icon: faBus, title:"Transit Media", description:"Mobile branding on buses, trains, and cabs.", link:"/services/advertisement/transit-media" },
    { icon: faMapMarkerAlt, title:"Strategic Format", description:"Strategic kiosk and airport advertising.", link:"/services/advertisement/strategic-format" },
    { icon: faNewspaper, title:"Print Media", description:"Ads in leading newspapers and magazines.", link:"/services/advertisement/print-media" },
    { icon: faTv, title:"Electronic Media", description:"Impactful TV commercials and radio ads.", link:"/services/advertisement/electronic-media" },
  ],
};

export const AtlOohAdvertisementData = {
  SeoName: { seotitle:"atl-ooh-advertisement" },
  hero: {
    title:"ATL/OOH Advertisement",
    subtitle:"High-visibility outdoor advertising solutions to maximize your brand reach.",
    ctas: [
      { text:"Get Free Quote", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Command Attention with Outdoor Advertising",
    text:"Above The Line (ATL) and Out-Of-Home (OOH) advertising ensures your brand gets maximum visibility in high-traffic areas.",
    details:"From massive billboards and unipoles to digital display boards, we offer premium locations across the city."
  },
  servicesTitle:"Advertising Solutions",
  services: [
    { icon: faAd, title:"Display Boards", description:"High-visibility illuminated and non-illuminated boards." },
    { icon: faAd, title:"Bill Boards", description:"Large format billboards at prime junctions." },
    { icon: faAd, title:"Unipole", description:"Strategic unipole advertising for long-range visibility." },
    { icon: faAd, title:"Wall Panel", description:"Effective wall panel ads on commercial buildings." },
    { icon: faAd, title:"Over Head Panel", description:"Overhead panel placements across major roads." },
    { icon: faBuilding, title:"Building Wraps", description:"Impactful building wrap ads that dominate the skyline." },
    { icon: faBus, title:"Bus Shelters", description:"Targeted bus shelter advertising for commuters." },
    { icon: faLandmark, title:"Flyover Pillars", description:"Pillar branding on flyovers for continuous exposure." },
    { icon: faStore, title:"Malls", description:"Premium mall advertising to target shoppers." },
    { icon: faTrain, title:"Railway Stations", description:"Railway station branding for regional reach." },
    { icon: faPlaneDeparture, title:"Airports", description:"Airport advertising solutions for premium audiences." },
  ],
  finalCTA: {
    title:"Ready to Boost Your Visibility?",
    text:"Partner with Leor Media for high-impact outdoor advertising campaigns.",
    phones: ["+91-9666643456"],
  }
};

export const TransitMediaData = {
  SeoName: { seotitle:"transit-media" },
  hero: {
    title:"Transit Media",
    subtitle:"Mobile branding solutions that take your message directly to the audience.",
    ctas: [
      { text:"Get Free Quote", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Advertising on the Move",
    text:"Transit media is one of the most effective ways to reach a diverse and widespread audience.",
    details:"By branding buses, trains, and cabs, your advertisement travels across the city, generating thousands of daily impressions."
  },
  servicesTitle:"Advertising Solutions",
  services: [
    { icon: faTaxi, title:"Cab Branding", description:"Mobile branding on cabs for city-wide exposure." },
    { icon: faBus, title:"Bus Panels", description:"Advertising on bus panels targeting pedestrians and drivers." },
    { icon: faBus, title:"Bus Wraps", description:"Full bus wrap branding for maximum visual impact." },
    { icon: faTruck, title:"Mobile Display Vans", description:"Dynamic mobile display vans for targeted localities." },
    { icon: faTrain, title:"Local & Metro Trains", description:"Train interior and exterior branding." },
    { icon: faTruck, title:"Truck Wrap", description:"Effective truck wrap branding for interstate visibility." },
    { icon: faTaxi, title:"Auto Rickshaw Branding", description:"Local auto rickshaw branding for hyper-local reach." },
  ],
  finalCTA: {
    title:"Get Your Brand Moving",
    text:"Partner with Leor Media for dynamic transit media advertising.",
    phones: ["+91-9666643456"],
  }
};

export const StrategicFormatData = {
  SeoName: { seotitle:"strategic-format" },
  hero: {
    title:"Strategic Format",
    subtitle:"Targeted advertising placements in high-engagement zones.",
    ctas: [
      { text:"Get Free Quote", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Smart Placements, High Engagement",
    text:"Strategic format advertising places your brand exactly where your target audience spends their time.",
    details:"From college kiosks and hypermarts to airport trolleys, we ensure your message is placed in contextual, high-dwell-time environments."
  },
  servicesTitle:"Advertising Solutions",
  services: [
    { icon: faAd, title:"Pole Kiosk", description:"Strategic pole kiosk ads along main arterial roads." },
    { icon: faTrain, title:"Metro Kiosk", description:"Metro station kiosk ads targeting daily commuters." },
    { icon: faGraduationCap, title:"College Kiosk", description:"Targeted college kiosk ads for the youth demographic." },
    { icon: faUsers, title:"Bench Branding", description:"Community bench branding in parks and walkways." },
    { icon: faSearch, title:"Barcodes", description:"Interactive barcode ads linking to digital experiences." },
    { icon: faPlaneDeparture, title:"Airport Trolley", description:"Branding on airport trolleys reaching travelers." },
    { icon: faShoppingCart, title:"Hypermarts", description:"Retail-focused hypermart ads near point-of-sale." },
    { icon: faPeopleArrows, title:"Event Advertising", description:"Strategic event-based advertising." },
    { icon: faTaxi, title:"Auto Rickshaw Branding", description:"Local auto rickshaw branding for targeted strategic placements." },
  ],
  finalCTA: {
    title:"Target Your Audience Smartly",
    text:"Partner with Leor Media for strategic format advertising.",
    phones: ["+91-9666643456"],
  }
};

export const PrintMediaData = {
  SeoName: { seotitle:"print-media" },
  hero: {
    title:"Print Media",
    subtitle:"Trusted and tangible advertising through newspapers, magazines, and periodicals.",
    ctas: [
      { text:"Get Free Quote", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"The Power of Print",
    text:"Print media remains one of the most trusted forms of advertising, offering high credibility and engaged readership.",
    details:"We handle ad placements across local and national newspapers, niche magazines, and direct mailers."
  },
  servicesTitle:"Advertising Solutions",
  services: [
    { icon: faNewspaper, title:"Newspapers", description:"Ads in leading local and national newspapers." },
    { icon: faBookOpen, title:"Magazines", description:"Niche magazine advertising for targeted demographics." },
    { icon: faFileAlt, title:"Periodicals", description:"Periodical ad placements in industry journals." },
    { icon: faEnvelope, title:"News Letters", description:"Targeted newsletter ads for specialized audiences." },
    { icon: faSearchDollar, title:"Digital Media Buying", description:"Strategic digital ad placements on news portals." },
  ],
  finalCTA: {
    title:"Publish Your Success",
    text:"Partner with Leor Media for impactful print media campaigns.",
    phones: ["+91-9666643456"],
  }
};

export const ElectronicMediaData = {
  SeoName: { seotitle:"electronic-media" },
  hero: {
    title:"Electronic Media",
    subtitle:"Captivating audio-visual advertising through television, radio, and cinema.",
    ctas: [
      { text:"Get Free Quote", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Broadcast Your Message",
    text:"Electronic media offers mass reach and high engagement through sight, sound, and motion.",
    details:"Whether it is a prime-time TV commercial, a catchy radio jingle, or an in-cinema ad, we ensure your brand leaves a lasting impression."
  },
  servicesTitle:"Advertising Solutions",
  services: [
    { icon: faFilm, title:"Theater", description:"Cinema theater advertising for captive audiences." },
    { icon: faTv, title:"Televisions", description:"Impactful TV commercials on regional and national channels." },
    { icon: faVideo, title:"Infilm", description:"Strategic in-film branding and product placements." },
    { icon: faRadio, title:"Radio", description:"Creative radio jingles and ads on FM channels." },
  ],
  finalCTA: {
    title:"Ready for the Spotlight?",
    text:"Partner with Leor Media for powerful electronic media advertising.",
    phones: ["+91-9666643456"],
  }
};

export const BtlAdvertisementData = {
  SeoName: { seotitle:"btl-advertisement" },
  hero: {
    title:"BTL Advertisement",
    subtitle:"Direct, targeted, and experiential marketing campaigns.",
    ctas: [
      { text:"Get Free Quote", link:"/contactus", primary: true },
    ]
  },
  introduction: {
    heading:"Engage Directly with Consumers",
    text:"Below The Line (BTL) advertising focuses on direct consumer engagement and highly targeted promotions.",
    details:"From mall activations and roadshows to experiential marketing and direct mailers, we create memorable interactions with your brand."
  },
  servicesTitle:"Advertising Solutions",
  services: [
    { icon: faBullhorn, title:"Brand Promotions", description:"Direct brand promotion activities." },
    { icon: faTruck, title:"Road Shows", description:"Engaging road show campaigns across key localities." },
    { icon: faLightbulb, title:"Experiential Marketing", description:"Interactive marketing experiences that drive engagement." },
    { icon: faStore, title:"Mall Activities", description:"On-ground mall activations to capture shopper attention." },
    { icon: faShoppingCart, title:"Retail Store Activities", description:"In-store promotional activities to boost sales." },
    { icon: faEnvelope, title:"Direct Marketing", description:"Personalized direct marketing campaigns." },
    { icon: faGlobe, title:"Digital Marketing", description:"BTL digital marketing integration." },
    { icon: faPhone, title:"Tele Marketing", description:"Professional telemarketing services for direct lead generation." },
  ],
  finalCTA: {
    title:"Drive Direct Engagement",
    text:"Partner with Leor Media for results-driven BTL advertisement.",
    phones: ["+91-9666643456"],
  }
};

// Mapping for individual pages
export const AdvertisementDetailPageData = {"atl-ooh-advertisement": AtlOohAdvertisementData,"transit-media": TransitMediaData,"strategic-format": StrategicFormatData,"print-media": PrintMediaData,"electronic-media": ElectronicMediaData,"btl-advertisement": BtlAdvertisementData,
};

// Assign unique cover images to each subpage data object
AdvertisingCompany.coverimage = AtlOohImg;
AtlOohAdvertisementData.coverimage = AtlOohImg;
TransitMediaData.coverimage = TransitMediaImg;
StrategicFormatData.coverimage = StrategicFormatImg;
PrintMediaData.coverimage = PrintMediaImg;
ElectronicMediaData.coverimage = ElectronicMediaImg;
BtlAdvertisementData.coverimage = BtlAdvertisingImg;

