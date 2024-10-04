import { useRef } from "react";
import { FaUniversity } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import AsideSection from "./components/AsideSection";
import CareerSection from "./components/CareerSection";
import AsideItem from "./components/ContactItem";
import ContactSection from "./components/ContactSection";
import CVEditor from "./components/CVEditor";
import DownArrow from "./components/DownArrow";
import EditButton from "./components/EditButton";
import ExperienceSection from "./components/ExperienceSection";
import MainSection from "./components/MainSection";
import PrintButton from "./components/PrintButton";
import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import TechSection from "./components/TechSection";
import useEdit from "./hooks/useEdit";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "CV-Luis Manuel Causa Suárez",
  });

  const {
    showForm,
    setShowForm,
    formData,
    closeEditor,
    handleSubmit,
    handleChange,
    handleNestedChange,
  } = useEdit();

  return (
    <div className="flex flex-col justify-center items-center p-10 relative">
      {showForm && (
        <CVEditor
          formData={formData}
          handleChange={handleChange}
          handleNestedChange={handleNestedChange}
          handleSubmit={handleSubmit}
          closeEditor={closeEditor}
        />
      )}

      <div className="w-[794px] h-[1123px] shadow-xl" ref={componentRef}>
        <div className="flex h-full rounded-md overflow-hidden">
          <Aside>
            <ProfileImage />
            <ProfileInfo name={formData.name} work={formData.specialty} />

            <div className="w-full flex flex-col justify-start items-start px-4">
              <ContactSection />
              <TechSection />

              <AsideSection title="Idiomas">
                <AsideItem
                  text={formData.languages.english}
                  icon={<IoLanguage color="#fff" />}
                />
              </AsideSection>

              <AsideSection title="Educación">
                <AsideItem
                  text={formData.education.university}
                  icon={<FaUniversity color="#fff" />}
                />
                <CareerSection careter={formData.education.career} />
              </AsideSection>
            </div>
          </Aside>

          <Main>
            <MainSection title="Acerca de mi" description={formData.about} />
            <MainSection
              title="Habilidades blandas"
              description={formData.skills}
            />
            <ExperienceSection experiences={formData.experience} />
          </Main>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <EditButton setShowForm={setShowForm} />
        <PrintButton reactToPrintFn={reactToPrintFn} />
      </div>
      <DownArrow />
    </div>
  );
}

export default App;
