import { IData } from '../models/models';

const sortListIdAscending = (list: IData[]): void => {
  list.sort((a, b) => {
    const idA = a.id;
    const idB = b.id;
    if (idA < idB) {
      return -1;
    }
    if (idA > idB) {
      return 1;
    }
    return 0;
  });
};

const sortListIdDescending = (list: IData[]): void => {
  list.sort((a, b) => {
    const idA = a.id;
    const idB = b.id;
    if (idA > idB) {
      return -1;
    }
    if (idA < idB) {
      return 1;
    }
    return 0;
  });
};

const sortListTitle = (list: IData[]): void => {
  list.sort((a, b) => {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
};

const sortListBody = (list: IData[]): void => {
  list.sort((a, b) => {
    const bodyA = a.body.toUpperCase();
    const bodyB = b.body.toUpperCase();
    if (bodyA < bodyB) {
      return -1;
    }
    if (bodyA > bodyB) {
      return 1;
    }
    return 0;
  });
};

export {
  sortListIdAscending,
  sortListIdDescending,
  sortListTitle,
  sortListBody,
};
