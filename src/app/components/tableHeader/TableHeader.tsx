import { FC } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './table-header.scss';

const TableHeader: FC = () => {
  return (
    <Container>
      <div className='header'>
        <Row className='header__row'>
          <Col className='header__col' xs={2}>
            <div className='header__title'>
              <span className='header__title-name'>Id</span>
              <span className='header__title-arrow'></span>
            </div>
          </Col>
          <Col className='header__col' xs={6}>
            <div className='header__title'>
              <span className='header__title-name'>Заголовок</span>
              <span className='header__title-arrow'></span>
            </div>
          </Col>
          <Col className='header__col' xs={4}>
            <div className='header__title'>
              <span className='header__title-name'>Описание</span>
              <span className='header__title-arrow'></span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default TableHeader;
