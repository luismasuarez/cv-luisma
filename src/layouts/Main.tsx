import { TLayoutProps } from "../types/layout";

const Main = ({ children }: TLayoutProps) => {
  return <div className="w-[65%] h-full bg-slate-200">{children}</div>;
};

export default Main;
