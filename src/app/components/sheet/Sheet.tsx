import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';

import SheetRow from '../sheetRow/SheetRow';

import {
  setCurrentSheet,
  setPrevLink,
  setNextLink,
} from '../../../redux/slices/mainSlice';

import { IData } from '../../../models/models';

import './sheet.scss';

interface ISheetProps {
  id: number;
  sheetData: IData[];
  totalRowsInSheet: number;
}

const Sheet: FC<ISheetProps> = ({ id, sheetData, totalRowsInSheet }) => {
  const dispatch = useAppDispatch();
  const totalSheets = useAppSelector((store) => store.mainSlice.totalSheets);

  useEffect(() => {
    dispatch(setCurrentSheet(id));
    switch (true) {
      case id === 1 && totalSheets !== 1:
        dispatch(setPrevLink('/'));
        dispatch(setNextLink('/page2'));
        break;
      case id === 1 && totalSheets === 1:
        dispatch(setPrevLink('/'));
        dispatch(setNextLink('/'));
        break;
      case id === 2 && totalSheets !== 2:
        dispatch(setPrevLink('/'));
        dispatch(setNextLink(`/page${id + 1}`));
        break;
      case id === 2 && totalSheets === 2:
        dispatch(setPrevLink('/'));
        dispatch(setNextLink(`/page${id}`));
        break;
      case id === totalSheets:
        dispatch(setPrevLink(`/page${id - 1}`));
        dispatch(setNextLink(`/page${id}`));
        break;
      default:
        dispatch(setPrevLink(`/page${id - 1}`));
        dispatch(setNextLink(`/page${id + 1}`));
        break;
    }
  }, [totalSheets]);

  const row: JSX.Element[] = [];
  for (let i = 0; i < totalRowsInSheet; i++) {
    if (i >= sheetData.length) {
      row.push(<SheetRow key={i} sheetData={null} />);
      continue;
    }
    row.push(<SheetRow key={i} sheetData={sheetData[i]} />);
  }

  return <div>{row}</div>;
};

export default Sheet;
