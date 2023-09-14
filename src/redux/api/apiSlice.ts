import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://book-catalog-server-navy-theta.vercel.app',
     baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['books'],
  endpoints: (builder) => ({
    postProduct: builder.mutation({
      query: ({ data }) => ({
        url: `/product`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    getproduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ['books'],
    }),
  }),
});


export const { usePostProductMutation, useGetproductQuery } = api;