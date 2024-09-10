import { Call, Location, Sms } from "iconsax-react";
import { FaLinkedin } from "react-icons/fa6";
import info from "../assets/cv.json";
import ContactItem from "./ContactItem";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div className="mt-4 self-start">
      <SectionTitle title="Contact" />
      <div className="flex flex-col gap-2 mt-2">
        <ContactItem
          text={info.phone}
          icon={<Call size={16} color="#fff" variant="Bold" />}
        />

        <ContactItem
          text={info.email}
          icon={<Sms size={16} color="#fff" variant="Bold" />}
        />

        <ContactItem text={info.linkedin} icon={<FaLinkedin color="#fff" />} />

        <ContactItem
          text={info.location}
          icon={<Location size={16} color="#fff" variant="Bold" />}
        />
      </div>
    </div>
  );
};

export default Contact;
