import React from "react";
type SkillGroupProps = {
  icon: React.ReactNode;
  stack: string;
  technologies: string[];
};
const SkillGroup = ({ icon, stack, technologies }: SkillGroupProps) => {
  return (
    <article
      className="
            rounded-2xl
            p-5
            border
          border-slate-200
          bg-white/80
            shadow-sm
            backdrop-blur-sm
          dark:border-blue-500/15
          dark:bg-slate-900/40
    "
    >
      <div className="flex items-center gap-2">
        <span
          className="
            text-xl
            text-blue-600
            dark:text-blue-400
          "
        >
          {icon}
        </span>

        <h3 className="text-sm font-bold">{stack}</h3>
      </div>

      <ul className="mt-3 space-y-1.5 list-disc hyphens-auto">
        {technologies.map((technolgy, idx) => {
          return (
            <li
              key={idx}
              className="
                ml-3
                gap-1.5
                text-xs
                text-slate-500
                dark:text-slate-400
              "
            >
              {technolgy}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default SkillGroup;
