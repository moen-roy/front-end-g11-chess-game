import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import BoardComponent from './components/BoardComponents'
import PawnComponent from './components/Pawn'
import RookComponent from './components/Rook'
createRoot(document.getElementById('root')).render
  (
    <StrictMode>
      <PawnComponent/>
      <RookComponent />     
      
    <PawnComponent />
      <BishopComponent />
  </StrictMode>,
  )

// git pull origin 
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin