import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
  setSearchList,
  resetSearchList,
} from '../../../redux/slices/mainSlice';

import './table-search.scss';

const TableSearch: FC = () => {
  const dispatch = useAppDispatch();
  const dataList = useAppSelector((state) => state.mainSlice.dataList);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputValue === '') {
      dispatch(resetSearchList());
    } else {
      const searchResultList = dataList.filter((item) => {
        return (
          item.title.includes(inputValue.trim()) ||
          item.body.includes(inputValue.trim())
        );
      });
      if (searchResultList.length === 0) {
        setInputValue('');
        return;
      }
      dispatch(setSearchList(searchResultList));
    }
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className='search' onSubmit={(e) => handleSearch(e)}>
      <input
        className='search__input'
        type='text'
        onChange={(e) => onChangeInputValue(e)}
        value={inputValue}
        placeholder='Поиск'
      />
      <button className='search__btn' />
    </form>
  );
};

export default TableSearch;
