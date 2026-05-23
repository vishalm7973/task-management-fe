import React from 'react'
import userIcon from '../assets/userIcon.png'
import PropTypes from 'prop-types'
import {useDraggable} from '@dnd-kit/react';

export const Card = ({id, title, user }) => {

    const {ref} = useDraggable({
        id: id,
      });

    const hasUser = user && user.firstName && user.lastName;

    const getUserInitials = (firstName, lastName) => {
        return firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase() || '';
    }

    return (
        <div ref={ref} className="w-full rounded-2xl bg-white shadow-lg p-3 border border-gray-200 mb-2">
            <h2 className="ml-2 text-l font-bold text-gray-700">
                {title}
            </h2>

            <div className="flex justify-end">

                {hasUser ? (
                    <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold text-sm">
                        {getUserInitials(user.firstName, user.lastName)}
                    </div>

                ) : (
                    <img
                        src={userIcon}
                        alt="User"
                        className="w-7 h-7 rounded-full object-cover border border-gray-300"
                    />
                )}


            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    })
}