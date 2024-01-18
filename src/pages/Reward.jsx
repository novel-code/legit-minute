import { useSongs } from "../hooks/useSongs";

function Reward() {
  const { songs } = useSongs();

  console.log("songs", songs);
  return <div>Reward</div>;
}

export default Reward;
