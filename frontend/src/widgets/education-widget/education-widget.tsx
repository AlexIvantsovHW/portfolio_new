import { useMemo, useState } from "react";
import * as i from "./imports";
export const EducationWidget = () => {
  const universityData = i.useSelector(
    (state: i.AppRootState) => state.universitiesSlice.data
  );
  const memoUniversityData = useMemo(() => {
    return universityData;
  }, [universityData]);
  const [value, setValue] = useState(1);
  console.log("Render EducationWidget");

  return (
    <div>
      Education widget
      <i.UniversityListSkillet data={memoUniversityData} />
      <button onClick={() => setValue(value + 1)}>click</button>
    </div>
  );
};
