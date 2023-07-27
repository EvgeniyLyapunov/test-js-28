import { FC } from 'react';
import { Container } from 'react-bootstrap';
import SheetRow from '../sheetRow/SheetRow';

import './sheet.scss';

const Sheet: FC = () => {
  return (
    <Container>
      <SheetRow />
      <SheetRow />
      <SheetRow />
    </Container>
  );
};

export default Sheet;
