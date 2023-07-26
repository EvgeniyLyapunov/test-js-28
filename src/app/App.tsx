import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import TableSearch from './components/tableSearch/TableSearch';
import TableHeader from './components/tableHeader/TableHeader';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container>
          <TableSearch />
          <TableHeader />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
