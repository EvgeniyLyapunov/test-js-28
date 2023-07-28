import { FC } from 'react';
import { useAppSelector } from '../../../hooks/reduxHooks';

import ItemOfPagination from '../itemOfPagination/ItemOfPagination';

import './pagination.scss';

const Pagination: FC = () => {
  const totalSheets = useAppSelector((store) => store.mainSlice.totalSheets);

  const paginationList: JSX.Element[] = [];

  for (let i = 1; i <= totalSheets; i++) {
    if (i === 1) {
      paginationList.push(
        <ItemOfPagination key={i} path={'/'} numOfSheet={i} />
      );
    } else {
      paginationList.push(
        <ItemOfPagination key={i} path={`/page${i}`} numOfSheet={i} />
      );
    }
  }

  return <div className='pagination'>{paginationList}</div>;
};

export default Pagination;
