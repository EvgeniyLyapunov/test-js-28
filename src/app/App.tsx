import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { getDataList } from '../redux/asyncThunks/getDataList';

import { setTotalSheets } from '../redux/slices/mainSlice';
import { totalSheets } from '../utils/totalSheets';

import TableSearch from './components/tableSearch/TableSearch';
import TableHeader from './components/tableHeader/TableHeader';
import SheetsRouting from './components/sheetsRouting/SheetsRouting';
import Navigation from './components/navigation/Navigation';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const dataList = useAppSelector((state) => state.mainSlice.dataList);
  const totalRowsInSheet = useAppSelector(
    (state) => state.mainSlice.totalRowsInSheet
  );

  useEffect(() => {
    dispatch(getDataList());
  }, [dispatch]);

  useEffect(() => {
    if (dataList.length > 0) {
      const total = totalSheets(totalRowsInSheet, dataList.length);
      dispatch(setTotalSheets(total));
    }
  }, [dataList]);

  return (
    <div className='App container'>
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
