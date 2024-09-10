import { ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode;
};

const AsideItem = ({ icon, text }: Props) => {
  return (
    <div className="flex items-baseline gap-2">
      <span>{icon}</span>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default AsideItem;
