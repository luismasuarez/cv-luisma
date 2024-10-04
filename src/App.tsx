import { useRef } from "react";
import { FaUniversity } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import INFO from "./assets/cv.json";
import AsideSection from "./components/AsideSection";
import AsideItem from "./components/ContactItem";
import ContactSection from "./components/ContactSection";
import DownArrow from "./components/DownArrow";
import ExperienceSection from "./components/ExperienceSection";
import MainSection from "./components/MainSection";
import PrintButton from "./components/PrintButton";
import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import TechSection from "./components/TechSection";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "CV-Luis Manuel Causa Suárez",
  });

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="w-[794px] h-[1123px] shadow-xl" ref={componentRef}>
        <div className="flex h-full rounded-md overflow-hidden">
          <Aside>
            <ProfileImage />
            <ProfileInfo name={INFO.name} work={INFO.specialty} />

            <div className="w-full flex flex-col justify-start items-start px-4">
              <ContactSection />

              <TechSection />

              <AsideSection title="Idiomas">
                <AsideItem
                  text={INFO.languages.english}
                  icon={<IoLanguage color="#fff" />}
                />
              </AsideSection>

              <AsideSection title="Educación">
                <AsideItem
                  text={INFO.education.university}
                  icon={<FaUniversity color="#fff" />}
                />

                <div className="flex justify-center items-center border-t border-slate-300 mt-4">
                  <p className="text-slate-300 text-center mt-10">
                    {INFO.education.career}
                  </p>
                </div>
              </AsideSection>
            </div>
          </Aside>

          <Main>
            <MainSection title="Acerca de mi" description={INFO.about} />

            <MainSection
              title="Habilidades blandas"
              description={INFO.skills}
            ></MainSection>

            <MainSection title="Experiencia">
              <ExperienceSection experiences={INFO.experience} />
            </MainSection>
          </Main>
        </div>
      </div>

      <PrintButton reactToPrintFn={reactToPrintFn} />
      <DownArrow />
    </div>
  );
}

export default App;
