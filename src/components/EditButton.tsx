type Props = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditButton = ({ setShowForm }: Props) => {
  return (
    <button
      onClick={() => setShowForm(true)}
      className="py-2 px-6 rounded-md bg-indigo-500 text-white font-bold hover:bg-indigo-600 transition duration-200"
    >
      Editar CV
    </button>
  );
};

export default EditButton;
