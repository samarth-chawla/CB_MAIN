import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Pages/homepage';
import { EventsPage } from './Pages/events';
import Navbar from './components/Navbar';
import Hackblocks from './Pages/hackblocks';
import Carnival from './Pages/carnival';
import PixelToPitch from './Pages/pixelToPitch';
import Uxelerate from './Pages/uxelerate'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/events' element={<EventsPage/>}/>
      <Route path='/events/hackblocks' element={<Hackblocks/>}/>
      <Route path='/events/carnival' element={<Carnival/>}/>
      <Route path='/events/p2p' element={<PixelToPitch/>}/>
      <Route path='/events/uxelerate' element={<Uxelerate/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;