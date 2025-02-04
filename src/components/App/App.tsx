import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import CardList from "../CardList";

import seminarsStore from "@/store/seminarsStore";

const App: FC = () => (
  <div>
    <h1>Семинары:</h1>
    <CardList />
  </div>
);

export default App;
