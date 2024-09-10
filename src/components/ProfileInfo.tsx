type Props = {
  name: string;
  work: string;
};

const ProfileInfo = ({ name, work }: Props) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-white mt-2">{name}</h1>

      <h2 className="font-semibold text-slate-300">{work}</h2>
    </div>
  );
};

export default ProfileInfo;
