import { AppRootState } from "@/src/app/store";
import { memo } from "react";
import { useSelector } from "react-redux";

const ProjectWidget = () => {
  console.log("Project Widget is rendered");
  const { data } = useSelector((state: AppRootState) => state.projectsSlice);
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-orangeLight">PROJECTS</h1>
      <video>
        <source />
      </video>
      <div>
        {data?.map((project) => {
          return <div key={project.id}>{project.title}</div>;
        })}
      </div>
    </div>
  );
};
export default memo(ProjectWidget);
