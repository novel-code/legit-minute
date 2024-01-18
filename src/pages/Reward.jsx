import { useSongs } from "../hooks/useSongs";

function Reward() {
  const { songs } = useSongs();

  console.log("ss", songs);
  return <div>Reward</div>;
}

export default Reward;
