import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  // baseQuery: fetchBaseQuery(
  //   { baseUrl: process.env.API_URL,
  //     prepareHeaders: (headers, { getState }) => {
  //     headers.set('Authorization', `Bearer ${process.env.REQUEST_KEY}`)

              

        
    
  //     return headers
  //     },
    
  //   }),
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `Bearer ${process.env.NEXT_PUBLIC_REQUEST_KEY}`);
      return headers;
    },
  }),
  reducerPath: "backendapi",
  tagTypes: [
    "Portfolios",
    "AboutPage",
    "ServicesPage",
    "ContactPage",
    "MainSlider",
    "SocialMedias",
  ],
  endpoints: (build) => ({
    getAboutPageContent: build.query({
      query: (id) => `about-page`,
      providesTags: ["AboutPage"]
    }),
    getPortfolioItems: build.query({
      query: () => "portfolio-projects?fields[0]=PortfolioTitle&fields[1]=ProjectDescription&fields[2]=Featured&populate[0]=ProjectImages&populate[1]=project_type&populate[2]=project_tags",
      providesTags: ["Portfolios"],
    }),
    getServices: build.query({
      query: () => "services?fields[0]=ServiceTitle&fields[1]=ServiceDescription",
      providesTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetAboutPageContentQuery,
  useGetPortfolioItemsQuery,
  useGetServicesQuery,
} = api;