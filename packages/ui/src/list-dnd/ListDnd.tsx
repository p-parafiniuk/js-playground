import cx from 'clsx';
import { Text, Checkbox, Button } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './ListDnd.module.css';

const data = [
  { checked: false, priority: 6, dueDate: 12.011, name: 'Task one' },
  { checked: true, priority: 7, dueDate: 14.007, name: 'Task two' },
  { checked: true, priority: 7, dueDate: 14.007, name: 'Task three' },
  // { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  // { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  // { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

export function ListDnd() {
  const [state, handlers] = useListState(data);

  const allChecked = state.every((value) => value.checked);
  const indeterminate = state.some((value) => value.checked) && !allChecked;
  // mt="xs"

  const items = state.map((item, index) => (
    <Draggable key={item.name} index={index} draggableId={item.name}>
      {(provided, snapshot) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Text className={classes.symbol}>{index + 1}.&nbsp;</Text>

          <Checkbox
            key={item.name}
            checked={item.checked}
            onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}

            label={
              <>
                {/* {index}.&nbsp; */}
              </>
            }
          />

          <div>
            <Text>{item.name}</Text>
            <Text c="dimmed" size="sm">
              Priority: {item.priority} • Due date: {item.dueDate}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <>
      {/* TODO sort by priority  */}
      <div className={classes.item}>
        <Text c="dimmed" size="sm">
          Priority
        </Text>

        <Button>Sort</Button>
      </div>

      <DragDropContext
        onDragEnd={({ destination, source }) =>
          handlers.reorder({ from: source.index, to: destination?.index || 0 })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}


/**
 * Initial ver
 */

// export function ListDnd() {
//   const [state, handlers] = useListState(data);

//   const items = state.map((item, index) => (
//     <Draggable key={item.symbol} index={index} draggableId={item.symbol}>
//       {(provided, snapshot) => (
//         <div
//           className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//           ref={provided.innerRef}
//         >
//           <Text className={classes.symbol}>{item.symbol}</Text>
//           <div>
//             <Text>{item.name}</Text>
//             <Text c="dimmed" size="sm">
//               Position: {item.position} • Mass: {item.mass}
//             </Text>
//           </div>
//         </div>
//       )}
//     </Draggable>
//   ));

//   return (
//     <DragDropContext
//       onDragEnd={({ destination, source }) =>
//         handlers.reorder({ from: source.index, to: destination?.index || 0 })
//       }
//     >
//       <Droppable droppableId="dnd-list" direction="vertical">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {items}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }