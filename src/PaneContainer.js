import React, { memo } from 'react';
import ListPane from './ListPane.js'
import JobPane from './JobPane.js'

export const PaneContainer = memo(function PaneContainer() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ListPane/>
      <JobPane/>
    </div>
  )
})