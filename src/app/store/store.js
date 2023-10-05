import { configureStore } from '@reduxjs/toolkit';
import { DMARCReportApi } from '../api/report-v2';

export const store = configureStore({
    reducer: {
        [DMARCReportApi.reducerPath]: DMARCReportApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(DMARCReportApi.middleware),
})

