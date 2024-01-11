function Home() {
  // Informative Frontend content and to know trends in context with
  //               software engineering and to learn in public for better future opprtunities

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
}

export default Home;
