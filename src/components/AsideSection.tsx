import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode | ReactNode[];
  props?: HTMLParagraphElement;
};

const AsideSection = ({ title, children }: Props) => {
  return (
    <div className="mt-4 self-start">
      <h3 className="text-lg text-white font-semibold">{title}</h3>
      {children}
    </div>
  );
};

export default AsideSection;
