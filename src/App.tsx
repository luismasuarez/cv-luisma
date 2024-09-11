import { FaUniversity } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import INFO from "./assets/cv.json";
import AsideSection from "./components/AsideSection";
import AsideItem from "./components/ContactItem";
import ContactSection from "./components/ContactSection";
import ProfileImage from "./components/ProfileImage";
import ProfileInfo from "./components/ProfileInfo";
import TechSection from "./components/TechSection";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="w-[816px] h-[1056px] shadow-xl">
        <div className="flex h-full rounded-md overflow-hidden">
          <Aside>
            <ProfileImage />
            <ProfileInfo name="Luis Manuel Causa Suárez" work="Web Developer" />

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

                <p className="text-slate-300 text-center mt-8">
                  {INFO.education.career}
                </p>
              </AsideSection>
            </div>
          </Aside>

          <Main>
            <h3 className="font-semibold text-slate-800">Acerca de mi</h3>
            <h3 className="font-semibold text-slate-800">
              Habilidades blandas
            </h3>

            <h3 className="font-semibold text-slate-800">
              Experiencia laboral
            </h3>
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;
