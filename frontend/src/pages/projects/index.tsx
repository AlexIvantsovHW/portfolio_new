import * as i from "./imports";
const Projects = () => {
  const { data, isLoading } = i.useGetAllProjectsQuery(20);

  return (
    <>
      {/*    <HeadMeta
        title={metaData.terms.title}
        description={metaData.terms.description}
      /> */}
      <main
        className={
          "px-[16px] flex flex-col gap-[40px] md:px-[32px] xl:px-[64px] xxl:px-[272px] py-[15px] flex flex-col items-center justify-start  "
        }
      >
        {isLoading ? (
          <div className="w-full h-fit flex items-center justify-around">
            {" "}
            {[1, 2].map((el) => (
              <i.Skeleton variant="rounded" width={210} height={250} />
            ))}
          </div>
        ) : (
          <i.ProjectWidget />
        )}
      </main>
    </>
  );
};
export default Projects;
