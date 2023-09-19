import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-catalog-server-nazmu957.vercel.app/',
    // baseUrl: 'http://localhost:5000',
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

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`, // Assuming you need to provide an ID to update a specific product
        method: 'PUT', // You can use 'PUT' or 'PATCH' depending on your API's requirements
        body: data,
      }),
      invalidatesTags: ['books'], // You can adjust the invalidation tags as needed
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['books'],
    }),
  }),
});


export const { usePostProductMutation, useGetproductQuery, usePostCommentMutation,useGetCommentQuery,useUpdateProductMutation } = api;