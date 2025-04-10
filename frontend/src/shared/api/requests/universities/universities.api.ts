import { Universities } from "@/src/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const universitiesApi = createApi({
  reducerPath: "universitiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (build) => ({
    getAllUniversities: build.query<Universities[], number>({
      query: (limit: number) => `/university`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          //dispatch(setData(data));
        } catch (err) {
          // `onError` side-effect
          // dispatch(messageCreated("Error fetching post!"));
        }
      },
    }),
  }),
});
export const { useGetAllUniversitiesQuery } = universitiesApi;
