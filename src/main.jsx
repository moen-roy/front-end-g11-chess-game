import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import BoardComponent from './components/BoardComponents'
import PawnComponent from './components/Pawn'
import RookComponent from './components/Rook'
import BishopComponent from './/components/BishopComponents'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <PawnComponent/>
      <RookComponent />     
      
  </StrictMode>,
)
// git pull origin <branch-name>
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin