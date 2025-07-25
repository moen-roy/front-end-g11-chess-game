import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import Homepage from './components/Homepage';
import QueenComponent from './components/QueenComponent';


//import BoardComponent from './components/BoardComponents'

import PawnComponent from './components/Pawn'
import BishopComponent from './components/Bishop';
//import Homepage from './components/Homepage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
    <PawnComponent/>
      <QueenComponent />
      <BishopComponent />
      
  </StrictMode>,
)
// git pull origin <branch-name>
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin