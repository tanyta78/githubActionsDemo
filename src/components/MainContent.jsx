import { useState } from 'react'

import HelpArea from './HelpArea'

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false)

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible)
  }

  return (
    <main>
      <h2>My DB name is ${process.env.DB_NAME}</h2>
      <button onClick={toggleHelp}>{helpVisible ? 'Hide' : 'Show'} Help</button>
      {helpVisible && <HelpArea />}
    </main>
  )
}

export default MainContent
