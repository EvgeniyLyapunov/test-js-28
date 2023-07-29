import { FC } from 'react';

import { IData } from '../../../models/models';

import './sheet-row.scss';

interface ISheetRowProps {
  sheetData: IData | null;
}

const SheetRow: FC<ISheetRowProps> = ({ sheetData }) => {
  return (
    <div className='sheet-row'>
      <div className='sheet-row__col sheet-row__col-id'>
        {sheetData ? sheetData.id : null}
      </div>
      <div className='sheet-row__col sheet-row__col-title'>
        {sheetData ? sheetData.title : null}
      </div>
      <div className='sheet-row__col sheet-row__col-descr'>
        {sheetData ? sheetData.body : null}
      </div>
    </div>
  );
};

export default SheetRow;
