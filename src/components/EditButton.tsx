type Props = {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditButton = ({ setShowForm }: Props) => {
  return (
    <button
      onClick={() => setShowForm(true)}
      className="mb-4 py-2 px-6 rounded-md bg-green-500 text-white font-bold hover:bg-green-600 transition duration-200"
    >
      Editar CV
    </button>
  );
};

export default EditButton;
