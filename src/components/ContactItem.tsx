import { ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode;
};

const AsideItem = ({ icon, text }: Props) => {
  return (
    <div className="flex items-center gap-2 mt-1">
      <span>{icon}</span>
      <p className="text-white text-sm">{text}</p>
    </div>
  );
};

export default AsideItem;
