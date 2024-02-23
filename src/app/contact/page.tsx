import ContactForm from "@/components/contactForm";
import SectionHead from "@/components/sectionHead";
import { FaMapMarker } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <SectionHead title="Contact" description="We are a here to help." />
      <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
        <div>
          <h2 className="font-medium text-2xl text-gray-800">
            Contact Astroship
          </h2>
          <p className="text-lg leading-relaxed text-slate-500 mt-3">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              <FaMapMarker size="2rem" />
              <span>1734 Sanfransico, CA 93063</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              <FaEnvelope size="2rem" />
              <a href="mailto:hello@astroshipstarter.com">
                hello@astroshipstarter.com
              </a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              <FaPhone size="2rem" />
              <a href="tel:+1 (987) 4587 899">+1 (987) 4587 899</a>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
