import { NavLink } from "react-router-dom";

interface FilterProps {
  children: React.ReactNode;
  filterType: "finished" | "active" | "all";
}

export default function Filter({ children, filterType }: FilterProps) {
  return (
    <li className="filter__btn">
      <NavLink to={`/${filterType}`} className="top-fz">
        {children}
      </NavLink>
    </li>
  );
}
