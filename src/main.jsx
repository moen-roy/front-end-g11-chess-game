import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import ChessGame from './components/AllLogic';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ChessGame />

  </StrictMode>,
  )

// git pull origin 
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin