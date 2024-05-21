export default function Filter({ children, setFilterBy, filterType }) {

    function handleFilter() {
        setFilterBy(filterType)
    }

    return (
        <li className="filter__btn">
            <button className="top-fz" onClick={handleFilter}>{children}</button>
        </li>
    )
}