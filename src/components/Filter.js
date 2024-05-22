export default function Filter({ children, filterBy, setFilterBy, filterType }) {
    const selected = filterBy === filterType;

    function handleFilter() {
        if (filterBy === filterType) return
        setFilterBy(filterType)
    }

    return (
        <li className={`filter__btn ${selected ? "selected" : ""}`}>
            <button className="top-fz" onClick={handleFilter}>{children}</button>
        </li>
    )
}