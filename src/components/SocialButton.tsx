import React from "react";
type SocialButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};
const SocialButton = ({ href, label, icon }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="
        flex items-center gap-2
        rounded-lg
        border
        border-slate-200
        bg-white/60
        px-4 py-2.5
        text-sm
        text-slate-600
        transition
        hover:border-blue-300
        hover:text-blue-600
        dark:border-slate-800
        dark:bg-slate-900/40
        dark:text-slate-400
        dark:hover:border-blue-400/30
        dark:hover:text-blue-400
      "
    >
      {icon}
      {label}
    </a>
  );
};

export default SocialButton;
