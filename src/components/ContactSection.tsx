import { Call, Location, Sms } from "iconsax-react";
import { FaLinkedin } from "react-icons/fa6";
import info from "../assets/cv.json";

import AsideItem from "./ContactItem";
import SectionTitle from "./SectionTitle";

const ContactSection = () => {
  return (
    <div className="mt-4 self-start">
      <SectionTitle title="Contacto" />

      <div className="flex flex-col gap-2 mt-2">
        <AsideItem
          text={info.contact.phone.name}
          url={info.contact.phone.url}
          icon={<Call size={16} color="#fff" variant="Bold" />}
        />

        <AsideItem
          text={info.contact.email.name}
          url={info.contact.email.url}
          icon={<Sms size={16} color="#fff" variant="Bold" />}
        />

        <AsideItem
          text={info.contact.linkedin.name}
          url={info.contact.linkedin.url}
          icon={<FaLinkedin color="#fff" />}
        />

        <AsideItem
          text={info.contact.location.name}
          url={info.contact.location.url}
          icon={<Location size={16} color="#fff" variant="Bold" />}
        />
      </div>
    </div>
  );
};

export default ContactSection;
