import { STATUS } from "../constants/status";

const columns = [
    {
        id: STATUS.PENDING,
        title: "Pending",
        status: STATUS.PENDING,
        headerColor: "bg-yellow-200",
        bodyColor: "bg-yellow-300",
    },
    {
        id: STATUS.IN_PROGRESS,
        title: "In Progress",
        status: STATUS.IN_PROGRESS,
        headerColor: "bg-blue-200",
        bodyColor: "bg-blue-300",
    },
    {
        id: STATUS.COMPLETED,
        title: "Completed",
        status: STATUS.COMPLETED,
        headerColor: "bg-green-200",
        bodyColor: "bg-green-300",
    }
]

export default columns