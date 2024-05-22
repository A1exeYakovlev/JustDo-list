import Filter from "./Filter";
import Info from "./Info";
export default function Top({ filterBy, setFilterBy, taskList }) {

    return (
        <div className="app__top">
            <ul className="top__filters">
                <Filter filterBy={filterBy} filterType="active" setFilterBy={setFilterBy}>Active</Filter>
                <Filter filterBy={filterBy} filterType="finished" setFilterBy={setFilterBy}>Finished</Filter>
                <Filter filterBy={filterBy} filterType="all" setFilterBy={setFilterBy}>All</Filter>
            </ul>
            <Info taskList={taskList} />
        </div>

    )
}