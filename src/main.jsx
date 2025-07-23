import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import QueenComponent from './components/QueenComponent';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueenComponent/>
</StrictMode>
)
// git pull origin <branch-name>
// git merge origin/animevite
// git pull --no-rebase origin branch-name
// git fetch origin