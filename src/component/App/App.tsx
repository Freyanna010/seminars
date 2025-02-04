import { FC, useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";

import seminarsStore from "@/store/seminarsStore";


const App: FC = () => {
 
  useEffect ( () => {
    seminarsStore.fetchSeminarsData();
  } ,[]);

  useEffect ( () => {
    console.log("seminar", toJS(seminarsStore.seminarsData) );
  } ,[seminarsStore.seminarsData]);


  return (
    <div>
      {seminarsStore.seminarsData.map(seminar => seminar.id)}
    </div>
  );
};

export default observer(App);