import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';

import {
  sortListIdAscending,
  sortListIdDescending,
  sortListTitle,
  sortListBody,
} from '../../../utils/sortList';

import { sortDataList } from '../../../redux/slices/mainSlice';

import './table-header.scss';

const TableHeader: FC = () => {
  const dispatch = useAppDispatch();
  const [sortDescending, setSortDescending] = useState<boolean>(false);
  const dataList = useAppSelector((store) => store.mainSlice.dataList);

  const handleIdSort = () => {
    if (!sortDescending) {
      const forSort = JSON.parse(JSON.stringify(dataList));
      sortListIdDescending(forSort);
      dispatch(sortDataList(forSort));
      setSortDescending(true);
    } else {
      const forSort = JSON.parse(JSON.stringify(dataList));
      sortListIdAscending(forSort);
      dispatch(sortDataList(forSort));
      setSortDescending(false);
    }
  };

  const handleTitleSort = () => {
    const forSort = JSON.parse(JSON.stringify(dataList));
    sortListTitle(forSort);
    dispatch(sortDataList(forSort));
  };
  const handleBodySort = () => {
    const forSort = JSON.parse(JSON.stringify(dataList));
    sortListBody(forSort);
    dispatch(sortDataList(forSort));
  };

  return (
    <div className='header'>
      <div className='header__section header__id' onClick={handleIdSort}>
        <span className='header__section-name header__id-name'>Id</span>
        <span className='header__section-arrow'></span>
      </div>
      <div className='header__section header__title' onClick={handleTitleSort}>
        <span className='header__section-name header__title-name'>
          Заголовок
        </span>
        <span className='header__section-arrow'></span>
      </div>
      <div className='header__section header__descr' onClick={handleBodySort}>
        <span className='header__section-name header__descr-name'>
          Описание
        </span>
        <span className='header__section-arrow'></span>
      </div>
    </div>
  );
};

export default TableHeader;
