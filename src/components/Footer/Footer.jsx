

import footer_csd from "../../assets/LogoFooter.svg";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FooterLogo1, FooterLogo2, FooterLogo3, FooterLogo4 } from "../../assets/data/icon_data";

import { GlobalData } from "../../assets/data/GlodalData";

import ChatBot from "../ChatBot/ChatBot";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-black  justify-center ">
      {/* Footer */}
      <section className="bg-black pb-5">
        <footer>
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-9 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <a href="/">
                  <img
                    src={footer_csd}
                    alt="footer_csd"
                    width="80"
                    height="80"
                  />
                </a>
                <p className="max-w-xs mt-4 text-secondary">
                  We are a fast-growing agency and we take over organising every event of your life with

perfection. In this way, we live up to our motto ‘Memories in Making’.
                </p>

                <div className="flex space-x-6 text-secondary pt-2">
                  <a href={GlobalData.company.companyfacebook} className="hover:text-primary transition-colors">
                    <FaFacebookF size={18} />
                  </a>
                  <a href={GlobalData.company.companyinstagram} className="hover:text-primary transition-colors">
                    <FaInstagram size={18} />
                  </a>
                  <a href={GlobalData.company.companytwitter} className="hover:text-primary transition-colors">
                    <FaXTwitter size={18} />
                  </a>
                  <a href={GlobalData.company.companypinterest} className="hover:text-primary transition-colors">
                    <FaPinterestP size={18} />
                  </a>
                  <a href={GlobalData.company.companylinkedin} className="hover:text-primary transition-colors">
                    <FaLinkedinIn size={18} />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
                <div>
                  <p className="font-medium text-secondary uppercase tracking-wider">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/services/wedding-planners" className="hover:text-primary transition-colors"> Wedding Planners </a>
                    <a href="https://www.vivahamco.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"> Wedding </a>
                    <a href="/services/digital-media-marketing" className="hover:text-primary transition-colors"> Digital Media Marketing </a>
                    <a href="/services/branding" className="hover:text-primary transition-colors"> Branding </a>
                    <a href="/services/advertisement" className="hover:text-primary transition-colors"> Advertisement </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-secondary uppercase tracking-wider">Useful links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/aboutus" className="hover:text-primary transition-colors"> About Us </a>
                    <a href="/services" className="hover:text-primary transition-colors"> Services </a>
                    <a href="/portfolio" className="hover:text-primary transition-colors"> Gallery </a>
                    <a href="/contactus" className="hover:text-primary transition-colors"> Contact Us </a>
                    <a href="/blogs" className="hover:text-primary transition-colors"> Blogs </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium text-secondary uppercase tracking-wider">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-[12px] text-secondary">
                    <a href="/Legal/privacy-policy" className="hover:text-primary transition-colors"> Privacy Policy </a>
                    <a href="/Legal/terms-and-conditions" className="hover:text-primary transition-colors"> Terms & Conditions </a>
                    <a href="/Legal/return-policy" className="hover:text-primary transition-colors"> Cancellation & Refund Policy </a>
                    <a href="/Legal/disclaimer" className="hover:text-primary transition-colors"> Disclaimer </a>
                    <a href="/Legal/shipping-and-delivery" className="hover:text-primary transition-colors"> Shipping & Delivery </a>
                  </nav>
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start border-t border-gray-800 pt-8">
              <div>
                <p className="font-medium text-secondary mb-4 uppercase tracking-wider">Address</p>
                <p className="text-secondary leading-relaxed">
                  flot no 404, 4th Floor, Near GVK Plaza, Gurudwara, Madhuranagar,<br />
                  Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016
                </p>
              </div>
              <div className="h-48 w-full rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.2397366200476!2d83.30672910000003!3d17.7333397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943260a034961%3A0xa55201e3106a886a!2sLeormedia!5e0!3m2!1sen!2sin!4v1777386710467!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Leor Media Location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>



           
            <div className="h-px my-8 border-0 bg-gray-600" />
            <p
              id="copyright"
              className="cursor-default text-center text-secondary"
            >
              © 2016-<span> {currentYear} </span>
              <span className="font-bold">leormedia.com.</span> All Rights
              Reserved.


            </p>
            <span className=" text-[12px] justify-center flex text-secondary">A Development & Designer Community ( #CSD )</span>
            <div className="flex pt-4 justify-center text-secondary text-[12px] space-x-4">
              <a href="/Legal/privacy-policy">Privacy Policy</a>
              <a href="/Legal/terms-and-conditions">Terms & Conditions</a>
              <a href="/Legal/disclaimer">Disclaimer</a>
              <a href="/sitemap.xml">Site Map</a>
            </div>
          </div>
        </footer>
        <section />
      </section>

      <ChatBot />
    </main>
  );
};

export default Footer;
