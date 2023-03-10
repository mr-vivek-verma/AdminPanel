import axios from 'axios';
import authHeader from '../../utils/authHeader/authHeader';
import { customAxios } from '../../utils/customAxios';

const { createAsyncThunk } = require('@reduxjs/toolkit');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  loading: false,
  categories: [],
  error: false,
};

// export const listCategory = createAsyncThunk(
//   '/category/categoryList',

//   async (_, thunkAPI) => {
//     try {
//       const catList = await myAxios.get('/category/categoryList', authHeader(thunkAPI));
//       console.log('list api', thunkAPI);
//       return catList.data;
//     } catch (error) {
//       return thunkAPI.error(error);
//     }
//   }
// );

export const getCategory = createAsyncThunk('categories/getCategory', async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      'https://chapshop.softprodigyphp.in/api/v1/category/categoryList',
      authHeader(thunkAPI)
    );

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data.msg);
  }
});

const categorySlice = createSlice({
  name: 'data',
  initialState,
  reducer: {},
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.loading = true;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.data = payload.data;
    },
  },
});

export default categorySlice.reducer;
