import { FC } from "react";
import { Card as AntdCard, Flex, Image } from "antd";
import Title from "antd/es/typography/Title";

import { CardProps } from "./types";
import classes from "./Card.module.scss";

const Card: FC<CardProps> = (props) => {
  const { title, date, time, photo, description } = props;
  return (
    <AntdCard className={classes.card}>
      <Title level={2}>{title}</Title>
      <Flex align="stretch" justify="space-between">
        <Title level={5}>{time} </Title>
        <Title level={5}>{date}</Title>
      </Flex>
      <Image className={classes.image} src={photo} />
      <Title level={4}>{description}</Title>
    </AntdCard>
  );
};

export default Card;
