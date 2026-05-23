import PropTypes from 'prop-types'
import React from 'react'
import { Card } from './Card'

const TaskColumn = ({ title, headerColor, bodyColor, tasks }) => {
    return (
        <div className="grid grid-rows-[60px_1fr] gap-4">
            <div className={`${headerColor} rounded-xl flex items-center justify-center text-xl font-bold`}>
                {title}
            </div>

            <div className={`${bodyColor} rounded-xl p-4 overflow-y-auto`}>
                {
                    tasks.map((task) => {
                        return <Card
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            user={task.user} />
                    })
                }
            </div>
        </div>
    )
}

export default TaskColumn

TaskColumn.propTypes = {
    title: PropTypes.string.isRequired,
    headerColor: PropTypes.string.isRequired,
    bodyColor: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        user: PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        }).isRequired,
    })).isRequired,
}