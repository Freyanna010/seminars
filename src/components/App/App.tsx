import { FC } from "react";
import Layout, { Content, Header } from "antd/es/layout/layout";

import { CardList } from "../CardList";
import classes from "./App.module.scss";

const App: FC = () => (
  <Layout className={classes.layout}>
    <Header className={classes.header}>
      <h1>Семинары по косметологии</h1>
    </Header>

    <Content className={classes.content}>
      <CardList />
    </Content>
  </Layout>
);

export default App;
