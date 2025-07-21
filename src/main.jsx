import React from 'react';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import PawnComponent from './components/Pawn'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PawnComponent />
     <PawnComponent />
      <PawnComponent />
       <PawnComponent />
       

     <PawnComponent />
    <BoardComponent />
  </StrictMode>,
)
// git pull origin <branch-name>
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin