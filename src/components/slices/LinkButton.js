const LinkButton = ({ children, link }) => {
  return (
    <a
      href={link}
      className="w-40 h-12 bg-200 rounded-md shadow-100 grid place-items-center"
    >
      {children}
    </a>
  );
};

export default LinkButton;
