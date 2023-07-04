import React, { memo } from 'react';
import { useDrag } from 'react-dnd'
const style = {
  border: '1px solid gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
export const NameCard = memo(function NameCard({ name, job, onDropped, type, isDropped }) {

  const [{ opacity }, drag] = useDrag(
    () => ({
      type: 'emp',
      item: { name, onDropped },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, job, type],
  )
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid="namecard">
      {isDropped ? <s>{name}</s> : name}
      {job}
    </div>
  )
})