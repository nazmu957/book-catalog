import { api } from "@/redux/api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products?sort=desc',
      providesTags: ['books'],
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const {useGetProductsQuery,
useSingleProductQuery} = productApi;