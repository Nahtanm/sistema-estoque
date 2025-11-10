import Header from "./assets/components/Header/Header";
import LeftBack from "./assets/components/LeftBack/LeftBack";
import RightBack from "./assets/components/RightBack/RightBack";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState("dashboard");
  return (
    <div>
      <Header />
      <div className="flex">
        <LeftBack onSelectPage={setPage}/>
        <RightBack currentPage={page}/>
      </div>
    </div>
  );
};

export default App;
