import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getDataList } from '../redux/asyncThunks/getDataList';

import { setTotalSheets } from '../redux/slices/mainSlice';

import TableSearch from './components/tableSearch/TableSearch';
import TableHeader from './components/tableHeader/TableHeader';
import SheetsRouting from './components/sheetsRouting/SheetsRouting';
import Navigation from './components/navigation/Navigation';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const dataList = useAppSelector((state) => state.mainSlice.dataList);

  useEffect(() => {
    dispatch(getDataList());
  }, [dispatch]);

  useEffect(() => {
    if (dataList.length > 0) {
      if (dataList.length % 10 === 0) {
        dispatch(setTotalSheets(dataList.length / 10));
      } else {
        dispatch(setTotalSheets(Math.floor(dataList.length / 10) + 1));
      }
    }
  }, [dataList]);

  return (
    <div className='App'>
      <BrowserRouter>
        <TableSearch />
        <TableHeader />
        <SheetsRouting />
        <Navigation />
      </BrowserRouter>
    </div>
  );
};

export default App;
