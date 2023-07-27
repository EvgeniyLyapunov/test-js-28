import { FC } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './table-search.scss';

const TableSearch: FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} md={8} lg={6}>
          <form className='search'>
            <input className='search__input' type='text' placeholder='Поиск' />
            <button className='search__btn' />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default TableSearch;
