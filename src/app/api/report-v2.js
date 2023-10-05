import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const DMARCReportApi = createApi({
    reducerPath: 'DMARCReportApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dmarc.postmarkapp.com/',
    }),
    endpoints: (builder) => ({
        getDMARCReport: builder.mutation({
            query: (payload) => ({
                url: 'records/my',
                method: 'GET',
                prepareHeaders: (headers) => {
                    headers.set("Accept", "application/json")
                    headers.set("X-Api-Token", payload.token)
                    return headers;
                }
            })
        })
    })
})

export const {useGetDMARCReportMutation} = DMARCReportApi