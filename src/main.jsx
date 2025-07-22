<<<<<<< HEAD
import React from 'react';

=======
import React from 'react'
>>>>>>> d6c0f158bcf288130b1fc9562cd1a48efb5a6a23
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import BoardComponent from './components/BoardComponents'

import PawnComponent from './components/Pawn'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <PawnComponent />
     <PawnComponent />
      <PawnComponent />
       <PawnComponent />
       

     <PawnComponent />
    <BoardComponent />
=======
    <PawnComponent/>
        <BoardComponent></BoardComponent>
      
>>>>>>> d6c0f158bcf288130b1fc9562cd1a48efb5a6a23
  </StrictMode>,
)
// git pull origin <branch-name>
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin