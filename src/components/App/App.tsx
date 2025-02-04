import { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";

import seminarsStore from "@/store/seminarsStore";


const App: FC = () => {
 
  useEffect ( () => {
    seminarsStore.fetchSeminarsData();
  } ,[]);

  return (
    <div>
      {seminarsStore.seminarsData.map(seminar => seminar.id)}
    </div>
  );
};

export default observer(App);