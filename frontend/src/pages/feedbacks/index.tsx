import { AppRootState } from "@/src/app/store";
import { useGetAllFeedbacksQuery } from "@/src/shared/api/requests/feedbacks";
import { useSelector } from "react-redux";

const Feedbacks = () => {
  const { data } = useGetAllFeedbacksQuery(20);
  const feedbackData = useSelector(
    (state: AppRootState) => state.feedbacksSlice.data
  );
  console.log(feedbackData);
  return <div>Feedbacks</div>;
};
export default Feedbacks;
