export type TLayoutProps = {
  children: ReactNode | ReactNode[];
};

type Experience = {
  position: string;
  company: string;
  time: string;
  duration: string;
  location: string;
  modality: string;
  url: string;
  aptitudes: string[];
};

interface Contact {
  phone: { name: string; url: string };
  email: { name: string; url: string };
  linkedin: { name: string; url: string };
  location: { name: string; url: string };
}

interface Languages {
  english: string;
  // Agrega otros idiomas si es necesario
}

interface Education {
  university: string;
  career: string;
}

interface FormData {
  name: string;
  specialty: string;
  contact: Contact;
  languages: Languages;
  education: Education;
  about: string;
  skills: string;
  experience: Experience[];
}
