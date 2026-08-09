type TechnologyProps = {
  icon: React.ReactNode;
  title: string;
};
const Technology = ({ icon, title }: TechnologyProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-3xl">{icon}</div>

      <label className="text-xs text-slate-500 dark:text-slate-400">
        {title}
      </label>
    </div>
  );
};

export default Technology;
