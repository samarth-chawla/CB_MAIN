import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage } from './Pages/homepage';
import { EventsPage } from './Pages/events';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/events' element={<EventsPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;