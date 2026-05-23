import { useState } from 'react';
import './App.css'
import tasks from "./data/tasks"
import columns from './data/columns';
import TaskColumn from './components/TaskColumn';
import { DragDropProvider } from '@dnd-kit/react';

function App() {
  const [data, setData] = useState(tasks);
  return (
    <DragDropProvider
      onDragEnd={(event) => {
        if (event.canceled) return;

        const { source, target } = event.operation;
        if (!target) return;

        setData((prev) =>
          prev.map((task) => {
            console.log(task.id, source.id, target.id);

            if (task.id === source.id) {
              return {
                ...task,
                status: target.id,
              };
            }

            return task;
          })
        );
      }}
    >
      <div className="grid grid-cols-3 gap-4 h-screen p-4 bg-gray-100">

        {
          columns.map((column) => {
            return <TaskColumn
              key={column.id}
              id={column.id}
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
    </DragDropProvider>
  )
}

export default App
