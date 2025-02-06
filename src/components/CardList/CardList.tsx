import { FC, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Spin } from "antd";
import { observer } from "mobx-react-lite";

import Card from "../Card/Card";
import classes from "./CardList.module.scss";

import seminarsStore from "@/store";
import { Seminar } from "@/types/types";

const CardList: FC = () => {
  const {
    isLoading,
    errorMessage,
    seminarsData,
    fetchSeminarsData,
    deleteSeminar,
    editSeminar,
  } = seminarsStore;

  useEffect(() => {
    fetchSeminarsData();
  }, [fetchSeminarsData]);

  const handleDeleteSeminar = (id: number) => {
    deleteSeminar(id);
  };

  const handleSaveEdit = (id: number, values: Partial<Seminar>) => {
    editSeminar(id, values);
  };

  if (isLoading) {
    return (
      <Spin
        className={classes.spin}
        indicator={<LoadingOutlined spin />}
        size="large"
      />
    );
  }

  if (errorMessage) {
    return <h1>errorMessage</h1>;
  }

  return (
    <Row gutter={[12, 12]} justify="start">
      {seminarsData.map(({ id, title, date, time, description, photo }) => (
        <Col key={id} lg={8} sm={12} xs={24}>
          <Card
            date={date}
            description={description}
            id={id}
            onDelete={() => handleDeleteSeminar(id)}
            onEdit={(values) => handleSaveEdit(id, values)}
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
