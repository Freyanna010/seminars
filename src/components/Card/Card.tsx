import { FC, useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import {
  Card as AntdCard,
  Button,
  Flex,
  Form,
  Input,
  Modal,
  Popconfirm,
  Tooltip,
  Upload,
} from "antd";
import Title from "antd/es/typography/Title";

import { CardProps } from "./Card.types";
import classes from "./Card.module.scss";

import noimage from "@/assets/noimage.jpg";
import Image from "../ui/Image";

const Card: FC<CardProps> = (props) => {
  const { id, title, date, time, photo, description, onDelete, onEdit } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
    form.setFieldsValue({ title, date, time, photo, description });
  };
  const handleDeleteSeminar = () => {
    onDelete(id);
  };
  const handleCancelModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveEdit = async () => {
    try {
      const values = await form.validateFields();
      await onEdit(values);
      setIsModalOpen(false);
    } catch (errorInfo) {
      console.log("Validation Failed:", errorInfo);
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <AntdCard className={classes.card}>
        <Flex align="stretch" justify="space-between">
          <Title level={2}>{title}</Title>
          <Flex align="center" gap={4} justify="and">
            <Tooltip title="Редактировать">
              <Button
                className={classes.buttonCard}
                icon={<EditOutlined />}
                onClick={() => showModal()}
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
                onConfirm={handleDeleteSeminar}
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

        <Image className={classes.imageCard} alt={noimage} src={photo} />

        <Title level={4}>{description}</Title>
      </AntdCard>

      <Modal
        cancelButtonProps={{ className: classes.cancelButton }}
        cancelText="Отменить"
        okButtonProps={{ className: classes.okButton }}
        okText="Сохранить"
        onCancel={handleCancelModal}
        onOk={() => handleSaveEdit()}
        open={isModalOpen}
        title="Редактировать семинар"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Название"
            name="title"
            rules={[
              { required: true, message: "Пожалуйста, введите название" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Дата"
            name="date"
            rules={[{ required: true, message: "Введите дату" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Время"
            name="time"
            rules={[{ required: true, message: "Введите время" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Ссылка на фото" name="photo">
            <Input />
          </Form.Item>

          <Form.Item label="Описание" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Card;
