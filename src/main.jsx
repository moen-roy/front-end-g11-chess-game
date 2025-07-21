import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BoardComponent from './Components/BoardComponents';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BoardComponent></BoardComponent>

  </StrictMode>
);
