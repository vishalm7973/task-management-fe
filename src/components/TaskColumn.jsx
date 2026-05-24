import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Card } from './Card'
import { useDroppable } from '@dnd-kit/react';
import { Plus, X } from "lucide-react";

const TaskColumn = ({ id, title, headerColor, bodyColor, tasks, handleAddCard }) => {

    const { ref } = useDroppable({
        id,
    });

    const [showAddCard, setShowAddCard] = useState(false);
    const [newCardTitle, setNewCardTitle] = useState('');

    return (
        <div className="grid grid-rows-[60px_1fr] gap-4">
            <div className={`bg-${headerColor}-200 rounded-xl flex items-center justify-center text-xl font-bold`}>
                {title}
            </div>

            <div ref={ref} className={`bg-${bodyColor}-300 rounded-xl p-4 overflow-y-auto`}>
                {
                    tasks.map((task) => {
                        return <Card
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            user={task.user}
                            bodyColor={bodyColor} />
                    })
                }
                {
                    showAddCard ? (
                            <div className="flex flex-col gap-3">
                                <textarea
                                    value={newCardTitle}
                                    onChange={(e) => setNewCardTitle(e.target.value)}
                                    placeholder="Enter a title or paste a link"
                                    rows={3}
                                    className="w-full rounded-xl border-2 border-blue-500 p-3 outline-none resize-none bg-white"
                                />

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            handleAddCard(id, newCardTitle);
                                            setNewCardTitle('');
                                            setShowAddCard(false);
                                        }}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" >
                                        <span className="text-sm">Add Card</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowAddCard(false);
                                            setNewCardTitle('');
                                        }}
                                        className="text-gray-700 hover:text-black"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                        ) :
                        (
                        <button
                            onClick={() => setShowAddCard(true)}
                            className={`flex items-center gap-2 bg-${bodyColor}-500 text-white px-4 py-2 w-full rounded-lg hover:bg-${bodyColor}-600`}
                        >
                            <Plus size={18} />
                            <span className="text-sm">Add Card</span>
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default TaskColumn

TaskColumn.propTypes = {
    id: PropTypes.string.isRequired,
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
    handleAddCard: PropTypes.func.isRequired,
}