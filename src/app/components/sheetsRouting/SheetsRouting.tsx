import { FC, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';

import { setTotalSheets } from '../../../redux/slices/mainSlice';

import { toArrayForSheets } from '../../../utils/toArrayForSheets';
import { totalSheets } from '../../../utils/totalSheets';

import Sheet from '../sheet/Sheet';

const SheetsRouting: FC = () => {
  const dispatch = useAppDispatch();
  const dataList = useAppSelector((store) => store.mainSlice.dataList);
  const searchList = useAppSelector((store) => store.mainSlice.searchList);

  const totalRowsInSheet = useAppSelector(
    (store) => store.mainSlice.totalRowsInSheet
  );

  const sheetsArray =
    searchList.length > 0
      ? toArrayForSheets(searchList, totalRowsInSheet)
      : toArrayForSheets(dataList, totalRowsInSheet);

  useEffect(() => {
    dispatch(setTotalSheets(sheetsArray.length));
  }, [sheetsArray]);

  const sheets = sheetsArray.map((item, i) => {
    return (
      <Route
        key={i}
        path={i === 0 ? '/' : `/page${i + 1}`}
        element={
          <Sheet
            key={i}
            id={i + 1}
            sheetData={item}
            totalRowsInSheet={totalRowsInSheet}
          />
        }
      />
    );
  });

  return (
    <>
      <Routes>{sheets}</Routes>
    </>
  );
};

export default SheetsRouting;
