import { TLayoutProps } from "../types/layout";

const Aside = ({ children }: TLayoutProps) => {
  return (
    <div className="w-[35%] h-full flex items-center flex-col bg-slate-800">
      {children}
    </div>
  );
};

export default Aside;
