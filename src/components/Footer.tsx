const Footer = () => {
  return (
    <>
      <div className="h-0.5 w-full mx-auto rounded-full bg-slate-200 dark:bg-slate-700/40" />
      <footer
        className="text-xs 
                text-slate-500
                dark:text-slate-400 
                p-2 
                text-center"
      >
        © 2026 Bernardo Alves Roballo
        <br />
        Built with React · TypeScript · Tailwind
      </footer>
    </>
  );
};

export default Footer;
