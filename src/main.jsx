import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import BoardComponent from './components/BoardComponents';

import BishopComponent from './components/Bishop';

import PawnComponent from './components/Pawn';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PawnComponent />
      <BishopComponent />
  </StrictMode>,
)
// git pull origin <branch-name>
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin