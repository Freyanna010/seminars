import { FC } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Card as AntdCard,
  Button,
  Flex,
  Image,
  Popconfirm,
  Tooltip,
} from "antd";
import Title from "antd/es/typography/Title";

import { CardProps } from "./types";
import classes from "./Card.module.scss";

import noimage from "@/assets/noimage.jpg";

const Card: FC<CardProps> = (props) => {
  const { id,title, date, time, photo, description, onDelete} = props;
  return (
    <AntdCard className={classes.card}>
      <Flex align="stretch" justify="space-between">
        <Title level={2}>{title}</Title>
        <Flex align="center" gap={4} justify="and">
          <Tooltip title="Редактировать">
            <Button
              className={classes.buttonCard}
              icon={<EditOutlined />}
              type="text"
            />
          </Tooltip>

          <Tooltip title="Удалить">
            <Popconfirm
              cancelButtonProps={{ className: classes.cancelButton }}
              cancelText="Отмена"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              okButtonProps={{ className: classes.okButton }}
              okText="Да"
              onConfirm={() => onDelete(id)}
              title="Вы хотите удалить семинар?"
            >
              <Button icon={<DeleteOutlined />} type="text" />
            </Popconfirm>
          </Tooltip>
        </Flex>
      </Flex>

      <Flex align="end" justify="space-between">
        <Title level={5}>{time} </Title>
        <Title className={classes.titleCard} level={5}>
          {date}
        </Title>
      </Flex>

      <Image className={classes.image} fallback={noimage} src={photo} />

      <Title level={4}>{description}</Title>
    </AntdCard>
  );
};

export default Card;
