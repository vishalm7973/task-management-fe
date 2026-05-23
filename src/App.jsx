import { useState } from 'react';
import './App.css'
import tasks from "./data/tasks"
import columns from './data/columns';
import TaskColumn from './components/TaskColumn';

function App() {
  const [data, setData] = useState(tasks);

  return (
    <div className="grid grid-cols-3 gap-4 h-screen p-4 bg-gray-100">

      {
        columns.map((column) => {
          return <TaskColumn
            key={column.id}
            title={column.title}
            headerColor={column.headerColor}
            bodyColor={column.bodyColor}
            tasks={
              data.filter(
                (task) => task.status === column.status
              )
            }
          />
        })
      }

    </div>
  )
}

export default App
