import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { filterAll, filterSpecific } from "../../redux/slices/filterSlice";
import { FilterList } from "./FilterList";

const Filter = () => {
    const dispatch = useAppDispatch();

    const handleFilterSpecific = (filter: string) => {
        dispatch(filterSpecific(filter))
    }
    const handleFilterAll = () => {
        dispatch(filterAll())
    }
    return (
        <>
            <button onClick={handleFilterAll}>All</button>
            {FilterList.map((button) => {
                return (<button onClick={() => handleFilterSpecific(button.filter)} key={button.id}>{button.filterName}</button>)
            })}
        </>
    )
}

export default Filter