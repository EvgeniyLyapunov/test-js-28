import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData } from '../../models/models';

export const getDataList = createAsyncThunk<
  IData[],
  void,
  { rejectValue: string }
>('mainSlice/getDataList', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      return rejectWithValue(`Error! ${response.status}, ${response.type}`);
    }

    const data = await response.json();
    return data as IData[];
  } catch {
    return rejectWithValue('Error!');
  }
});
