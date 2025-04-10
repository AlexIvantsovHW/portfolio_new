import { useGetAllJobsQuery } from "@/src/shared/api/requests/jobs/jobs.api";
import { HeadMeta } from "@/src/widgets/HeadMeta/HeadMeta";
import { useSelector } from "react-redux";
import { AppRootState } from "../../app/store/types";

const Jobs = () => {
  const { data } = useGetAllJobsQuery(20);
  const dataNew = useSelector((state: AppRootState) => {
    return state.jobsSlice.data;
  });
  console.log(dataNew);
  return (
    <>
      {/*    <HeadMeta
        title={metaData.terms.title}
        description={metaData.terms.description}
      /> */}
      <main
        className={
          "px-[16px] flex flex-col gap-[40px] md:px-[32px] xl:px-[64px] xxl:px-[272px] py-[15px]   "
        }
      >
        <div className="flex flex-col gap-[40px] items-center justify-center w-full text-[20px] md:text-[35px] lg:text-[45px]">
          <h1 className="text-center uppercase w-full md:w-[75%] text-[#FFD700]">
            Jobs
          </h1>
        </div>
      </main>
    </>
  );
};
export default Jobs;
