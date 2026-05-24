import { STATUS } from "../constants/status";

const columns = [
    {
        id: STATUS.PENDING,
        title: "Pending",
        status: STATUS.PENDING,
        headerColor: "yellow",
        bodyColor: "yellow",
    },
    {
        id: STATUS.IN_PROGRESS,
        title: "In Progress",
        status: STATUS.IN_PROGRESS,
        headerColor: "blue",
        bodyColor: "blue",
    },
    {
        id: STATUS.COMPLETED,
        title: "Completed",
        status: STATUS.COMPLETED,
        headerColor: "green",
        bodyColor: "green",
    }
]

export default columns