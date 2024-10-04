import { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children?: ReactNode | ReactNode[];
};

const MainSection = ({ title, description, children }: Props) => {
  return (
    <div>
      <h3 className="text-lg mt-2 ml-2 font-semibold text-slate-800">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-justify p-2  text-slate-700">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default MainSection;
