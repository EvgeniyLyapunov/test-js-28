import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import TableSearch from './components/tableSearch/TableSearch';
import TableHeader from './components/tableHeader/TableHeader';
import Sheet from './components/sheet/Sheet';
import Navigation from './components/navigation/Navigation';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <TableSearch />
        <TableHeader />
        <Sheet />
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
