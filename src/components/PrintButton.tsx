import { UseReactToPrintFn } from "react-to-print";

type Props = {
  reactToPrintFn: UseReactToPrintFn;
};

const PrintButton = ({ reactToPrintFn }: Props) => {
  return (
    <button
      onClick={() => reactToPrintFn()}
      className="mt-4 py-2 px-6 rounded-md bg-slate-500 text-white font-bold hover:bg-slate-600 transition duration-200"
    >
      Imprimir CV
    </button>
  );
};

export default PrintButton;
