import { STATUS } from "../constants/status"

const tasks = [
    {
        id: 1,
        title: "Make Backend Api",
        status: STATUS.PENDING,
        user: {
            firstName: "John",
            lastName: "Doe",
        },
    },
    {
        id: 2,
        title: "Create UI",
        status: STATUS.IN_PROGRESS,
    },
    {
        id: 3,
        title: "Create transaction page",
        status: STATUS.COMPLETED,
    },
    {
        id: 4,
        title: "LLm Model Integration",
        status: STATUS.PENDING,
    },
    {
        id: 5,
        title: "Subscription for IOS",
        status: STATUS.IN_PROGRESS,
    },
    {
        id: 6,
        title: "Subscription for Android",
        status: STATUS.COMPLETED,
    },
    {
        id: 7,
        title: "Tourist page desing",
        status: STATUS.PENDING,
    },
    {
        id: 8,
        title: "Dashboard page design",
        status: STATUS.IN_PROGRESS,
    },
    {
        id: 9,
        title: "Login page design",
        status: STATUS.COMPLETED,
    },
]

export default tasks