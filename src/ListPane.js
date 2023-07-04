import React, { useState } from 'react';
import { NameCard } from './NameCard.js'

function ListPane() {
  const [dummyState, setDummyState] = useState({});
  const [components, setSortedComponents] = useState([
    { name: 'Nolan', job: '' },
    { name: 'Jon', job: '' },
    { name: 'Haylee', job: '' },
    { name: 'Josh', job: '' },
    { name: 'Sarah', job: ''  },
    { name: 'Cody', job: '' },
  ]);

  const updateJob = (empName, newJob) => {
    const jobIndex = components.findIndex(x => x.job ===newJob);
    if (jobIndex > -1){
      components[jobIndex].job = ''
    }
    const empIndex = components.findIndex(y => y.name ===empName);
    components[empIndex].job = newJob
    setDummyState({})
  }

  const [sortOrder, setSortOrder] = useState('asc');
  const sortComponents = (property) => {
    const sorted = [...components].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[property].localeCompare(b[property]);
      } else {
        return b[property].localeCompare(a[property]);
      }
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setSortedComponents(sorted);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={() => sortComponents('name')}>
        Sort by Name
      </button>
      <button onClick={() => sortComponents('job')}>
        Sort by Job
      </button>
      {components.map((component) => (
        <NameCard
          name={component.name}
          job={component.job}
          onDropped={updateJob}
        />
      ))}
    </div>
  );
}

export default ListPane;