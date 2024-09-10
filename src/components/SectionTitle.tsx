type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return <h3 className="text-lg text-white font-semibold">{title}</h3>;
};

export default SectionTitle;
