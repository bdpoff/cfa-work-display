import React, { memo } from 'react';
import { useDrop } from 'react-dnd'

const style = {
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}
export const JobCard = memo(function JobCard({ job, name, onDropped }) {


  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'emp',
    drop: (item, monitor) => {
        item.onDropped(item.name, job)
        onDropped(job, item.name)
      },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="jobcard">
        {job}
        {name}
    </div>
  )
})