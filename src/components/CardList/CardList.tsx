import { FC, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Spin } from "antd";
import { observer } from "mobx-react-lite";

import Card from "../Card/Card";
import classes from "./CardList.module.scss";

import seminarsStore from "@/store";

const CardList: FC = () => {
  const { isLoading, errorMessage, seminarsData, fetchSeminarsData } =
    seminarsStore;

  useEffect(() => {
    fetchSeminarsData();
  }, [fetchSeminarsData]);

  if (isLoading) {
    return <Spin className={classes.spin} indicator={<LoadingOutlined spin />} size="large" />;
  }

  if (errorMessage) {
    return <h1>errorMessage</h1>;
  }

  return (
    <Row gutter={[12, 12]} justify="start" >
      {seminarsData.map(({ id, title, date, time, description, photo }) => (
        <Col lg={8} sm={12} xs={24}>
          <Card
            date={date}
            description={description}
            id={id}
            key={id}
            photo={photo}
            time={time}
            title={title}
          />
        </Col>
      ))}
    </Row>
  );
};

const ObservedCardList = observer(CardList);
export { ObservedCardList as CardList };
