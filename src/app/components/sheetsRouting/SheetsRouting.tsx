import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/reduxHooks';

import { toArrayForSheets } from '../../../utils/toArrayForSheets';

import Sheet from '../sheet/Sheet';

const SheetsRouting: FC = () => {
  const dataList = useAppSelector((store) => store.mainSlice.dataList);
  const totalRowsInSheet = useAppSelector(
    (store) => store.mainSlice.totalRowsInSheet
  );
  const sheetsArray = toArrayForSheets(dataList, totalRowsInSheet);

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
