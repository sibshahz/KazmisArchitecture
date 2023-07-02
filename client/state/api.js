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
    "ProjectTypes",
    "ProjectTags",
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
      providesTags: ["ServicesPage"],
    }),
    getProjectTypes: build.query({
      query: () => "project-types?fields[0]=ProjectType",
      providesTags: ["ProjectTypes"],
    }),
    getProjectTags: build.query({
      query: () => "project-tags?fields[0]=Tag",
      providesTags: ["ProjectTags"],
    }),
    
  }),
});

export const {
  useGetAboutPageContentQuery,
  useGetPortfolioItemsQuery,
  useGetServicesQuery,
  useGetProjectTypesQuery,
  useGetProjectTagsQuery,
} = api;