import { ReactNode } from "react";

type Props = {
  text: string;
  url?: string;
  icon?: ReactNode;
};

const AsideItem = ({ icon, url, text }: Props) => {
  return (
    <div className="flex items-center gap-2 mt-1">
      <span>{icon}</span>
      {url ? (
        <a
          href={url}
          className="text-white text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      ) : (
        <p className="text-white text-sm">{text}</p>
      )}
    </div>
  );
};

export default AsideItem;
