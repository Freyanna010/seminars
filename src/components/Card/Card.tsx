import { FC } from "react";
import {
  Card as AntdCard,
  Button,
  Flex,
  Image,
  Popconfirm,
  Space,
  Tooltip,
} from "antd";
import Title from "antd/es/typography/Title";

import { CardProps } from "./types";
import classes from "./Card.module.scss";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import noimage from "@/assets/noimage.jpg";

const Card: FC<CardProps> = (props) => {
  const { title, date, time, photo, description } = props;
  return (
    <AntdCard className={classes.card}>
      <Flex align="stretch" justify="space-between">
        <Title level={2}>{title}</Title>
        <Flex align="center" justify="and" gap={4}>
          <Tooltip title="Редактировать">
            <Button
              type="text"
              icon={<EditOutlined />}
              className={classes.buttonCard}
            />
          </Tooltip>

          <Tooltip title="Удалить">
            <Popconfirm
              title="Вы хотите удалить семинар?"
              okText="Да"
              cancelText="Отмена"
              okButtonProps={{ className: classes.okButton }}
              cancelButtonProps={{ className: classes.cancelButton }}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => console.log("удалено")}
            >
              <Button type="text" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </Flex>
      </Flex>

      <Flex justify="space-between" align="end">
        <Title level={5}>{time} </Title>
        <Title level={5} className={classes.titleCard}>
          {date}
        </Title>
      </Flex>

      <Image className={classes.image} src={photo} fallback={noimage} />

      <Title level={4}>{description}</Title>
    </AntdCard>
  );
};

export default Card;
