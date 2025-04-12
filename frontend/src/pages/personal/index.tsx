import { AppRootState } from "@/src/app/store";
import { useGetPersonalDataQuery } from "@/src/shared/api/requests/personal";
import { useSelector } from "react-redux";

const Personal = () => {
  const { data } = useGetPersonalDataQuery(20);
  const personalData = useSelector(
    (state: AppRootState) => state.personalSlice.data
  );
  console.log(personalData);
  return <div>Personal</div>;
};
export default Personal;
