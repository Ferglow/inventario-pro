import { useState } from "react";
import "./App.css";
import { AuthContextProvider, MyRoutes} from "./index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AuthContextProvider>
        <MyRoutes/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
