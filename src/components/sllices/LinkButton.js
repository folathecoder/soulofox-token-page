const LinkButton = ({ children, link }) => {
  return (
    <a href={link} className="">
      {children}
    </a>
  );
};

export default LinkButton;
