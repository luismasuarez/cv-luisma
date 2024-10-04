import React from "react";

interface CVEditorProps {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => void;
  handleNestedChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    nestedField: string
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  closeEditor: () => void;
}

const CVEditor: React.FC<CVEditorProps> = ({
  formData,
  handleChange,
  handleNestedChange,
  handleSubmit,
  closeEditor,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 border border-gray-300 rounded-md shadow-md"
    >
      <h2 className="text-lg font-bold mb-2">Editar CV</h2>
      <div className="mb-2">
        <label className="block mb-1">Nombre:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange(e, "name")}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Especialidad:</label>
        <input
          type="text"
          value={formData.specialty}
          onChange={(e) => handleChange(e, "specialty")}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Sobre mí:</label>
        <textarea
          value={formData.about}
          onChange={(e) => handleChange(e, "about")}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Habilidades:</label>
        <textarea
          value={formData.skills}
          onChange={(e) => handleChange(e, "skills")}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Idiomas (Inglés):</label>
        <input
          type="text"
          value={formData.languages.english}
          onChange={(e) => handleNestedChange(e, "languages", "english")}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Universidad:</label>
        <input
          type="text"
          value={formData.education.university}
          onChange={(e) => handleNestedChange(e, "education", "university")}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Carrera:</label>
        <input
          type="text"
          value={formData.education.career}
          onChange={(e) => handleNestedChange(e, "education", "career")}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div className="mb-2">
        <label className="block mb-1">Experiencia:</label>
        <textarea
          value={JSON.stringify(formData.experience, null, 2)} // Para editar experiencias como JSON
          onChange={(e) => handleNestedChange(e, "experience", "experiences")}
          className="border border-gray-300 rounded p-2 w-full h-24"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Guardar Cambios
      </button>
      <button
        type="button"
        onClick={closeEditor}
        className="ml-2 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
      >
        Cancelar
      </button>
    </form>
  );
};

export default CVEditor;
