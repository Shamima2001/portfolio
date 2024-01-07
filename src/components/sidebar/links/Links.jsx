const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <div className="links">
      {items.map((item, i) => (
        <a key={i} href="{`#${item}`} key={item}>">
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
