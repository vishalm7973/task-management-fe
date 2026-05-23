import { STATUS } from "../constants/status";

const columns = [
    {
        title: "Pending",
        status: STATUS.PENDING,
        headerColor: "bg-yellow-200",
        bodyColor: "bg-yellow-300",
    },
    {
        title: "In Progress",
        status: STATUS.IN_PROGRESS,
        headerColor: "bg-blue-200",
        bodyColor: "bg-blue-300",
    },
    {
        title: "Completed",
        status: STATUS.COMPLETED,
        headerColor: "bg-green-200",
        bodyColor: "bg-green-300",
    }
]

export default columns