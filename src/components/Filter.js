import { NavLink } from "react-router-dom";

export default function Filter({ children, filterType }) {
    return (
        <li className="filter__btn">
            <NavLink to={`/${filterType}`} className="top-fz">{children}</NavLink>
        </li>
    )
}