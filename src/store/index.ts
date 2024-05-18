import { configureStore } from '@reduxjs/toolkit';
import createApi from "@/services";
import { rootReducer } from "@/store/rootReducer.ts";


const api = createApi()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } })
})

export default store
