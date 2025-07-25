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
// import QueenComponent from './components/QueenComponent';
// import HomePage from './components/Homepage';
import SlideController from './components/SlideController';
// import ChessSlides2 from './components/ChessSlides2';
// import ChessSlides from './components/ChessSlides';
// import Instructions from './components/Instructions';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SlideController/>
  </StrictMode>
)
// git pull origin <branch-name>
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin