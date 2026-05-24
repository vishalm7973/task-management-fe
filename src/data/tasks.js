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
        user: {
            firstName: "Jane",
            lastName: "Smith",
        },
    },
    {
        id: 3,
        title: "Create transaction page",
        status: STATUS.COMPLETED,
        user: {
            firstName: "Alice",
            lastName: "Johnson",
        },
    },
    {
        id: 4,
        title: "LLm Model Integration",
        status: STATUS.PENDING,
        user: {
            firstName: "Bob",
            lastName: "Brown",
        },
    },
    {
        id: 5,
        title: "Subscription for IOS",
        status: STATUS.IN_PROGRESS,
        user: {
            firstName: "Charlie",
            lastName: "Davis",
        },
    },
    {
        id: 6,
        title: "Subscription for Android",
        status: STATUS.COMPLETED,
        user: {
            firstName: "David",
            lastName: "Miller",
        },
    },
    {
        id: 7,
        title: "Tourist page desing",
        status: STATUS.PENDING,
        user: {
            firstName: "Eve",
            lastName: "Wilson",
        },
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