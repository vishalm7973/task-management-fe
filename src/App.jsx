import { useState } from 'react';
import './App.css'
import { Card } from './components/Card'
import tasks from "./data/tasks"
import { STATUS } from './constants/status';

function App() {
  const [data, setData] = useState(tasks);

  const pendingTasks = data.filter((task) => task.status === STATUS.PENDING);
  const inProgressTasks = data.filter((task) => task.status === STATUS.IN_PROGRESS);
  const completedTasks = data.filter((task) => task.status === STATUS.COMPLETED);

  return (
    <div className="grid grid-cols-3 gap-4 h-screen p-4 bg-gray-100">

      <div className="grid grid-rows-[60px_1fr] gap-4">

        <div className="bg-yellow-200 rounded-xl flex items-center justify-center text-xl font-bold">
          Pending
        </div>

        <div className="bg-yellow-300 rounded-xl p-4 overflow-y-auto">
          {
            pendingTasks.map((task) => {
              return <Card
                key={task.id}
                title={task.title}
                user={task.user} />
            })
          }
        </div>

      </div>

      <div className="grid grid-rows-[60px_1fr] gap-4">

        <div className="bg-blue-200 rounded-xl flex items-center justify-center text-xl font-bold">
          In Progress
        </div>

        <div className="bg-blue-300 rounded-xl p-4 overflow-y-auto">
          {
            inProgressTasks.map((task) => {
              return <Card
                key={task.id}
                title={task.title}
                user={task.user} />
            })
          }
        </div>

      </div>

      <div className="grid grid-rows-[60px_1fr] gap-4">

        <div className="bg-green-200 rounded-xl flex items-center justify-center text-xl font-bold">
          Completed
        </div>

        <div className="bg-green-300 rounded-xl p-4 overflow-y-auto">
          {
            completedTasks.map((task) => {
              return <Card
                key={task.id}
                title={task.title}
                user={task.user} />
            })
          }
        </div>

      </div>

    </div>
  )
}

export default App
