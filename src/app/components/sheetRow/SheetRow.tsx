import { FC } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './sheet-row.scss';

const SheetRow: FC = (props) => {
  return (
    <div className='sheet-row'>
      <Row className='sheet-row__row'>
        <Col className='sheet-row__col' xs={2}>
          <div className='sheet-row__col-content'>1</div>
        </Col>
        <Col className='sheet-row__col' xs={6}>
          <div className='sheet-row__col-content'>Просто заголовок</div>
        </Col>
        <Col className='sheet-row__col' xs={4}>
          <div className='sheet-row__col-content'>
            Текст описания как он есть.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SheetRow;
