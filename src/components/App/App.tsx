import { FC } from "react";
import classes from "./App.module.scss";

import { CardList } from "../CardList";

import Layout, { Content, Header } from "antd/es/layout/layout";

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
