import { FC, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Card, Col, Image, Row, Spin } from "antd";
import Title from "antd/es/typography/Title";
import { observer } from "mobx-react-lite";

import seminarsStore from "@/store";

const CardList: FC = () => {
  const { isLoading, errorMessage, seminarsData, fetchSeminarsData } =
    seminarsStore;

  useEffect(() => {
    fetchSeminarsData();
  }, [fetchSeminarsData]);

  if (isLoading) {
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;
  }

  if (errorMessage) {
    return <h1>errorMessage</h1>;
  }

  return (
    <>
       <Row gutter={[16, 16]} justify= "start"> 
      {seminarsData.map(({ id, title, date, time, description, photo }) => (
        <Col key={id} xs={24} sm={12} lg={12}> 
          <Card>
            <Title>{title}</Title>
            <div>
              <Title>{date}</Title>
              <Title>{time}</Title>
            </div>
            <Image src={photo} />
            <Title>{description}</Title>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};

const ObservedCardList = observer(CardList);
export { ObservedCardList as CardList };
