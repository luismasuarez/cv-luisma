type Props = {
  careter: string;
};
const CareerSection = ({ careter }: Props) => {
  return (
    <div className="flex justify-center items-center border-t border-slate-300 mt-4">
      <p className="text-slate-300 text-center mt-10">{careter}</p>
    </div>
  );
};

export default CareerSection;
