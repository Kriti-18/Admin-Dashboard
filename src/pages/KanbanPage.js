// src/pages/KanbanPage.js
import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = [
  { id: '1', content: 'Task 1' },
  { id: '2', content: 'Task 2' },
  { id: '3', content: 'Task 3' },
];

const KanbanPage = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  return (
    <div>
      <Typography variant="h4">Kanban</Typography>
      <Box className="kanban-container">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <Box {...provided.droppableProps} ref={provided.innerRef} className="kanban-column">
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="kanban-task"
                      >
                        {task.content}
                      </Box>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </div>
  );
};

export default KanbanPage;
