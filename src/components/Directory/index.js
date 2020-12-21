import { useSelector } from "react-redux";
import { MenuItem } from "../MenuItem/MenuItem.component";
import "./styles.scss";

export const Directory = () => {
  const { sections } = useSelector((state) => state.directory);

  return (
    <div className="directory-menu">
      {sections.map((section, i) => (
        <MenuItem {...section} key={i} />
      ))}
    </div>
  );
};
