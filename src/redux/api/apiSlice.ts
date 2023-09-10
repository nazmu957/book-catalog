import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-catalog-server-navy-theta.vercel.app',
  }),
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: ({ data }) => ({
        url: `/product`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});


export const { usePostProductMutation } = api;