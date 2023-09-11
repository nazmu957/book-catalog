import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://book-catalog-server-navy-theta.vercel.app',
     baseUrl: 'http://localhost:5000',
  }),
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: ({ data }) => ({
        url: `/product`,
        method: 'POST',
        body: data,
      }),
    }),
    getproduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});


export const { usePostProductMutation, useGetproductQuery } = api;