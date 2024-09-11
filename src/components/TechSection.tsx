import { LiaNodeJs } from "react-icons/lia";
import {
  SiAwsamplify,
  SiCypress,
  SiExpress,
  SiMui,
  SiReact,
  SiReacthookform,
  SiShadcnui,
  SiTailwindcss,
  SiZod,
} from "react-icons/si";
import AsideSection from "./AsideSection";
import AsideItem from "./ContactItem";

const TechSection = () => {
  return (
    <AsideSection title="Tecnologías">
      <AsideItem text="React" icon={<SiReact color="#fff" />} />
      <AsideItem text="React Native" icon={<SiReact color="#fff" />} />
      <AsideItem
        text="React Hook Form"
        icon={<SiReacthookform color="#fff" />}
      />
      <AsideItem text="ZOD" icon={<SiZod color="#fff" />} />
      <AsideItem text="Material UI" icon={<SiMui color="#fff" />} />
      <AsideItem text="Tailwindcss" icon={<SiTailwindcss color="#fff" />} />
      <AsideItem text="shadcn/ui" icon={<SiShadcnui color="#fff" />} />
      <AsideItem text="Cypress" icon={<SiCypress color="#fff" />} />
      <AsideItem text="AWS" icon={<SiAwsamplify color="#fff" />} />
      <AsideItem text="Node" icon={<LiaNodeJs color="#fff" />} />
      <AsideItem text="Express JS" icon={<SiExpress color="#fff" />} />
    </AsideSection>
  );
};

export default TechSection;
