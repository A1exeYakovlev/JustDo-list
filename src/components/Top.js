import Filter from "./Filter";
import Info from "./Info";
export default function Top({ setFilterBy, taskList }) {

    return (
        <div className="app__top">
            <ul className="top__filters">
                <Filter filterType="active" setFilterBy={setFilterBy}>Active</Filter>
                <Filter filterType="finished" setFilterBy={setFilterBy}>Finished</Filter>
                <Filter filterType="all" setFilterBy={setFilterBy}>All</Filter>
            </ul>
            <Info taskList={taskList} />
        </div>

    )
}