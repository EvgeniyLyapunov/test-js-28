import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/reduxHooks';
import classNames from 'classnames';

import './item-of-pagination.scss';

interface IItemOfPaginationProps {
  path: string;
  numOfSheet: number;
}

const ItemOfPagination: FC<IItemOfPaginationProps> = ({ path, numOfSheet }) => {
  const currentSheet = useAppSelector((store) => store.mainSlice.currentSheet);
  const classes = classNames({
    item__link: true,
    item__link_active: currentSheet === numOfSheet ? true : false,
  });
  return (
    <div className='item'>
      <Link className={classes} to={`${path}`}>
        {numOfSheet}
      </Link>
    </div>
  );
};

export default ItemOfPagination;
