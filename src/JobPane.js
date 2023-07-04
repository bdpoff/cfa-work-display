import React, { useState } from 'react';
import { JobCard } from './JobCard.js'

function JobPane() {
  const [dummyState, setDummyState] = useState({});
  const searchParams = new URLSearchParams(document.location.search)
  const [components, setSortedComponents] = useState(searchParams.get('jobs').split(',').map((job) => (
    { 'job': job, 'name': '' }
  ))) 

  const updateName = (tempJob, empName) => {
    const empIndex = components.findIndex(x => x.name ===empName);
    if (empIndex > -1){
      components[empIndex].name = ''
    }
    const jobIndex = components.findIndex(y => y.job ===tempJob);
    components[jobIndex].name = empName
    setDummyState({})
  }

  /*const [sortOrder, setSortOrder] = useState('asc');
  const sortComponents = (property) => {
    const sorted = [...components].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[property].localeCompare(b[property]);
      } else {
        return b[property].localeCompare(a[property]);
      }
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    console.log(sorted)
    setSortedComponents(sorted);
  };*/

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {components.map((component) => (
        <JobCard
          job={component.job}
          name={component.name}
          onDropped={updateName}
        />
      ))}
    </div>
  );
}

export default JobPane;