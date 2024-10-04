import { TExperience } from "../types/layout";

type Props = {
  experiences: Array<TExperience>;
};

const ExperienceSection = ({ experiences }: Props) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <ol className="border-l-2 border-gray-300">
        {experiences.map((job, index) => (
          <li key={index} className="relative">
            {/* Contenido de la experiencia */}
            <div className="border rounded-lg p-4">
              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  {job.position}
                </h3>
                <div className="flex items-center gap-2">
                  <a
                    href={job.url}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company}
                  </a>
                  {" · "}
                  <p className="text-sm text-gray-700">{job.time}</p>
                </div>
                <p className="text-sm text-gray-700">{job.duration}</p>
                <p className="text-sm text-gray-700">
                  {job.location} {" · "} {job.modality}
                </p>
              </div>
              <p className="text-sm text-gray-700"></p>
            </div>

            {index !== experiences.length - 1 && (
              <div className="flex items-center justify-center">
                <span className="absolute w-[90%] self-center h-0.5 bg-slate-300"></span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ExperienceSection;
