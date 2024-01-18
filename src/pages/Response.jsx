import { useYoutubeContent } from "../hooks/useYoutubeContent";
import { useUserDataOrInsert } from "../hooks/useUserDataOrInsert";

function Response() {
  const { data: responseAndRewardList, isLoading } = useUserDataOrInsert();
  const { data: subVids, isLoading: isLoadingSubVids } = useYoutubeContent();

  console.log(responseAndRewardList, subVids);

  return <div>Response</div>;
}

export default Response;
