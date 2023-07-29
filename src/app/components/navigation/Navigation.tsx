import { FC } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';
import { Link } from 'react-router-dom';

import Pagination from '../pagination/Pagination';

import './navigation.scss';

const Navigation: FC = () => {
  const prev = useAppSelector((store) => store.mainSlice.prev);
  const next = useAppSelector((store) => store.mainSlice.next);

  return (
    <div className='navigation'>
      <div className='navigation__col navigation__col-prev'>
        <Link className='navigation__link' to={prev ? prev : '/'}>
          Назад
        </Link>
      </div>
      <div className='navigation__col navigation__col-pagination'>
        <Pagination />
      </div>
      <div className='navigation__col navigation__col-next'>
        <Link className='navigation__link' to={next ? next : '/page2'}>
          Далее
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
