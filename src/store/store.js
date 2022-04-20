import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./theme-slice";
import FilterSlice from "./filter-slice";
import SearchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
    filters: FilterSlice.reducer,
    search: SearchSlice.reducer,
  },
});

export const { toggleTheme } = ThemeSlice.actions;

export const { setFilterValue, toggleFilter } = FilterSlice.actions;

export const { setSearchValue } = SearchSlice.actions;

export default store;
