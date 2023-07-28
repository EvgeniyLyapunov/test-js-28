import { FC } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IData } from '../../../models/models';

import './sheet-row.scss';

interface ISheetRowProps {
  sheetData: IData | null;
}

const SheetRow: FC<ISheetRowProps> = ({ sheetData }) => {
  return (
    <div className='sheet-row'>
      <Row className='sheet-row__row'>
        <Col className='sheet-row__col' xs={2}>
          <div className='sheet-row__col-content sheet-row__col-content_center'>
            {sheetData ? sheetData.id : null}
          </div>
        </Col>
        <Col className='sheet-row__col' xs={6}>
          <div className='sheet-row__col-content'>
            {sheetData ? sheetData.title : null}
          </div>
        </Col>
        <Col className='sheet-row__col' xs={4}>
          <div className='sheet-row__col-content'>
            {sheetData ? sheetData.body : null}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SheetRow;
