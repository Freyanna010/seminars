import { FC } from "react";
import { Card as AntdCard, Flex, Image } from "antd";

import { CardProps } from "./types";
import Title from "antd/es/typography/Title";
import classes from "./Card.module.scss";

const Card: FC<CardProps> = (props) => {
  const { title, date, time, photo, description } = props;
  return (
    <AntdCard className={classes.card}>
      <Title level={2}>{title}</Title>
      <Flex justify="space-between" align="stretch">
        <Title level={5}>{time} </Title>
        <Title level={5}>{date}</Title>
      </Flex>
      <Image src={photo} className={classes.image} />
      <Title level={4}>{description}</Title>
    </AntdCard>
  );
};

export default Card;
