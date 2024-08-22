import Filter from "./Filter";
import Info from "./Info";
export default function Top({ taskList }) {

    return (
        <div className="app__top">
            <ul className="top__filters">
                <Filter filterType="active">Active</Filter>
                <Filter filterType="finished">Finished</Filter>
                <Filter filterType="all">All</Filter>
            </ul>
            <Info taskList={taskList} />
        </div>

    )
}