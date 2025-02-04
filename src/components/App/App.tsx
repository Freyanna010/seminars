import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import seminarsStore from "@/store/seminarsStore";
import CardList from "../CardList";

const App: FC = () => {
  return (
    <div>
      <h1>Семинары:</h1>
      <CardList />
    </div>
  );
};

export default App;
