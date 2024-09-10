import { FaUniversity } from "react-icons/fa";
import INFO from "./assets/cv.json";
import AsideSection from "./components/AsideSection";
import Contact from "./components/Contact";
import AsideItem from "./components/ContactItem";
import ProfileImage from "./components/ProfileImage";
import Tecnologies from "./components/Tecnologies";
import Aside from "./layouts/Aside";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="w-[816px] h-[1056px]">
        <div className="flex h-full rounded-md overflow-hidden">
          <Aside>
            <ProfileImage />
            <div>
              <h1 className="text-xl font-bold text-white mt-2">
                Luis Manuel Causa Suárez
              </h1>

              <h2 className="font-semibold text-slate-300">Web Developer</h2>
            </div>

            <div className="w-full flex flex-col justify-start items-start px-4">
              <Contact />
              <Tecnologies />

              <AsideSection title="Idiomas">
                <AsideItem text={INFO.languages.english} />
              </AsideSection>

              <AsideSection title="Educación">
                <AsideItem
                  text={INFO.education.university}
                  icon={<FaUniversity color="#fff" />}
                />

                <p className="text-slate-300 text-center mt-4">
                  {INFO.education.career}
                </p>
              </AsideSection>
            </div>
          </Aside>

          <Main>
            <div>
              <h3 className="font-semibold text-slate-800">Soft Skills</h3>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Work Experience</h3>
            </div>
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;
