import { FC } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Pagination from '../pagination/Pagination';

import './navigation.scss';

const Navigation: FC = () => {
  const prev = useAppSelector((store) => store.mainSlice.prev);
  const next = useAppSelector((store) => store.mainSlice.next);

  return (
    <Container>
      <div className='navigation'>
        <Row className='navigation__row'>
          <Col className='navigation__col navigation__col-prev' xs={2}>
            <Link className='navigation__link' to={prev ? prev : '/'}>
              Назад
            </Link>
          </Col>
          <Col className='navigation__col' xs={6}>
            <Pagination />
          </Col>
          <Col className='navigation__col navigation__col-next' xs={2}>
            <Link className='navigation__link' to={next ? next : '/page2'}>
              Далее
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Navigation;
