import { FC, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
    if (id === 1) {
      dispatch(setPrevLink('/'));
      dispatch(setNextLink('/page2'));
    } else if (id === 2) {
      dispatch(setPrevLink('/'));
      dispatch(setNextLink(`/page${id + 1}`));
    } else if (id === totalSheets) {
      dispatch(setPrevLink(`/page${id - 1}`));
      dispatch(setNextLink(`/page${id}`));
    } else {
      dispatch(setPrevLink(`/page${id - 1}`));
      dispatch(setNextLink(`/page${id + 1}`));
    }
  }, [dispatch]);

  const row: JSX.Element[] = [];
  for (let i = 0; i < totalRowsInSheet; i++) {
    if (i >= sheetData.length) {
      row.push(<SheetRow key={i} sheetData={null} />);
    }
    row.push(<SheetRow key={i} sheetData={sheetData[i]} />);
  }

  return <Container>{row}</Container>;
};

export default Sheet;
