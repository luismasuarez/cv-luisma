import { ReactNode } from "react";

type Props = {
  text: string;
  icon: ReactNode;
};

const ContactItem = ({ icon, text }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p className="text-white">{text}</p>
    </div>
  );
};

export default ContactItem;
