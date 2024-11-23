// import Card from "./components/card/card";

import { useState } from "react";
import Loader from "./components/loader";

function App() {
  const [isActive, setActive] = useState(true);
  return <Loader isActive={isActive} />;
}
export default App;
