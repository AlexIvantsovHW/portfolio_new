import { jobsApi } from "@/src/shared/api/requests/jobs/jobs.api";
import { jobsSlice } from "@/src/shared/api/requests/jobs/slice";
import { universitiesSlice } from "@/src/shared/api/requests/universities/slice";
import { universitiesApi } from "@/src/shared/api/requests/universities/universities.api";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser", "actualCategorySlice"],
};

const rootReducer = combineReducers({
  [jobsApi.reducerPath]: jobsApi.reducer,
  jobsSlice: jobsSlice.reducer,
  [universitiesApi.reducerPath]: universitiesApi.reducer,
  universitiesSlice: universitiesSlice.reducer,

  /*   farmersListFilterSlice: farmersListFilterSlice.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer, */
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      /*       farmerDataApi.middleware, */
      jobsApi.middleware,
      universitiesApi.middleware
    ),
});

export const persistor = persistStore(store);
