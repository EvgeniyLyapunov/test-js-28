import { FC } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './table-header.scss';

const TableHeader: FC = () => {
  return (
    <div className='header'>
      <Row className='header__row'>
        <Col xs={2}>
          <div className='header__col'>
            <span className='header__col-name'>Id</span>
            <span className='header__col-arrow'></span>
          </div>
        </Col>
        <Col xs={6}>
          <div className='header__col'>
            <span className='header__col-name'>Заголовок</span>
            <span className='header__col-arrow'></span>
          </div>
        </Col>
        <Col xs={4}>
          <div className='header__col'>
            <span className='header__col-name'>Описание</span>
            <span className='header__col-arrow'></span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TableHeader;
