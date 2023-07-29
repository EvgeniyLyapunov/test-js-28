import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { getDataList } from '../asyncThunks/getDataList';
import { IData } from '../../models/models';

interface IMainSlice {
  dataList: IData[];
  searchList: IData[];
  dataArraysList: IData[][];
  currentSheet: number;
  totalSheets: number;
  totalRowsInSheet: number;
  prev: string;
  next: string;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: IMainSlice = {
  dataList: [],
  searchList: [],
  dataArraysList: [],
  currentSheet: 1,
  totalSheets: 0,
  totalRowsInSheet: 10,
  prev: '/',
  next: '/page2',
  loading: false,
  errorMessage: null,
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setCurrentSheet: (state, action: PayloadAction<number>) => {
      state.currentSheet = action.payload;
    },
    setTotalSheets: (state, action: PayloadAction<number>) => {
      state.totalSheets = action.payload;
    },
    setPrevLink: (state, action: PayloadAction<string>) => {
      state.prev = action.payload;
    },
    setNextLink: (state, action: PayloadAction<string>) => {
      state.next = action.payload;
    },
    sortDataList: (state, action: PayloadAction<IData[]>) => {
      state.dataList = action.payload;
    },
    setSearchList: (state, action: PayloadAction<IData[]>) => {
      state.searchList = action.payload;
    },
    resetSearchList: (state) => {
      state.searchList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataList.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(
        getDataList.fulfilled,
        (state, action: PayloadAction<IData[]>) => {
          state.loading = false;
          state.dataList = action.payload;
        }
      )
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.errorMessage = action.payload;
        state.loading = false;
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = mainSlice;
export default reducer;
export const {
  setCurrentSheet,
  setTotalSheets,
  setPrevLink,
  setNextLink,
  sortDataList,
  setSearchList,
  resetSearchList,
} = actions;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
