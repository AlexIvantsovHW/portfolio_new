import { Contacts } from "@/src/shared/types/contact.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setData } from "./slice";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: (build) => ({
    getAllContact: build.query<Contacts[], number>({
      query: (limit: number) => "/contact",
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setData(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useGetAllContactQuery } = contactApi;
