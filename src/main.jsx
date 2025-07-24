import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import QueenComponent from './components/QueenComponent';
import Bishop from './components/Bishop'

import BoardComponent from './components/BoardComponents'
import All from './components/AllComponents'
// import BoardComponent from './components/BoardComponents'
import KingComponent from './components/KingComponent'
import PawnComponent from './components/Pawn'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <All />

      
    <PawnComponent/>
        
        <KingComponent/>
  

  </StrictMode>,
  )

// git pull origin 
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin