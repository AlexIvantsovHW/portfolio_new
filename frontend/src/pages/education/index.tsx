import { useGetAllUniversitiesQuery } from "@/src/shared/api/requests/universities/universities.api";
import { EducationWidget } from "@/src/widgets/education-widget";
import { HeadMeta } from "@/src/widgets/HeadMeta/HeadMeta";

const Education = () => {
  const { data } = useGetAllUniversitiesQuery(20);

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
            Education
          </h1>
        </div>
        <EducationWidget />
      </main>
    </>
  );
};
export default Education;
