import PersonaInfo from "./personalInfo";
import Education from "./education";
import { useState } from "react";
import defaultUser from "../assets/defaultCred";
import Cv from "./cv";
import Experience from "./experience";
export default function Content() {
  const [user, setUser] = useState(defaultUser);

  return (
    <div className="content">
      <div className="form">
        <PersonaInfo user={user} setUser={setUser} />
        <Education user={user} setUser={setUser} />
        <Experience user={user} setUser={setUser} />
      </div>
      <div className="cv">
        <Cv user={user} />
      </div>
    </div>
  );
}
