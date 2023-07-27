import { FC } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Pagination from '../pagination/Pagination';

import './navigation.scss';

const Navigation: FC = () => {
  return (
    <Container>
      <div className='navigation'>
        <Row className='navigation__row'>
          <Col className='navigation__col navigation__col-rev' xs={2}>
            <Link className='navigation__link' to={''}>
              Назад
            </Link>
          </Col>
          <Col className='navigation__col' xs={6}>
            <Pagination />
          </Col>
          <Col className='navigation__col navigation__col-next' xs={2}>
            <Link className='navigation__link' to={''}>
              Далее
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Navigation;
