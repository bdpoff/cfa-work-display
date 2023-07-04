import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5toTouch } from 'rdndmb-html5-to-touch'
import { PaneContainer } from './PaneContainer'

export const App = () => {

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <PaneContainer />
    </DndProvider>
  )
}

export default App