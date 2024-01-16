import Rewards from "./Rewards";
// import UsualRoutine from "./UsualRoutine";

function Home() {
  // Informative Frontend content and to know trends in context with
  //               software engineering and to learn in public for better future opprtunities

  const rewards = [
    "This is the incentive for finishing this activity.",
    "This is your reward for completing this task",
    "You'll receive this as payment for finishing this mission.",
    "You will receive this as payment for completing this challenge.",
    "You will get this as payment for completing the task.",
    "This is the prize you will receive for doing this challenge.",
    "This is what you'll get after you do this challenge.",
    "You will be rewarded with this after completing this task.",
    "As payment for completing this challenge, you will get this.",
  ];

  console.log(rewards);

  return (
    <div>
      <Rewards />
      {/* {rewards.map((reward, i) => (
        <div key={reward}>{`${i + 1} ${reward}`}</div>
      ))} */}
      {/* <UsualRoutine /> */}
    </div>
  );
  /*
  return (
    <div>
      <h3>Technologies that take control over me or use me sometimes:</h3>
      <div style={{ display: "flex" }}>
        <ul style={{ listStyle: "none" }}>
          <li>Youtube</li>
          <li>Youtube Music</li>
          <li>LinkedIn</li>
        </ul>
        <ul style={{ listStyle: "none" }}>
          <li>
            <select defaultValue={"FOMO"}>
              <option value={""}>
                {"Select a why you can't stop using this tech"}
              </option>
              <option value={"FOMO"}>
                Fear Of Missing Out in Frontend/other things
              </option>
              <option value={"Easy escape from reality and you feel good"}>
                You feel good and Easy escape from reality
              </option>
              <option value={"learn in public"}>
                Learn in public for better future opprtunities but you scroll
              </option>
            </select>
          </li>
          <li>
            {" "}
            <select defaultValue={"Easy escape from reality and you feel good"}>
              <option value={""}>
                {"Select a why you can't stop using this tech"}
              </option>
              <option value={"FOMO"}>
                Fear Of Missing Out in Frontend/other things
              </option>
              <option value={"Easy escape from reality and you feel good"}>
                You feel good and Easy escape from reality
              </option>
              <option value={"learn in public"}>
                Learn in public for better future opprtunities but you scroll
              </option>
            </select>
          </li>
          <li>
            {" "}
            <select defaultValue={"learn in public"}>
              <option value={""}>
                {"Select a why you can't stop using this tech"}
              </option>
              <option value={"FOMO"}>
                Fear Of Missing Out in Frontend/other things
              </option>
              <option value={"Easy escape from reality and you feel good"}>
                You feel good and Easy escape from reality
              </option>
              <option value={"learn in public"}>
                Learn in public for better future opprtunities but you scroll
              </option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
  */
}
export default Home;
