import { Seminar } from "@/types/types";

export type CardProps = Seminar & {
  onDelete: (id: number) => void;
  onEdit: (values: Partial<Seminar>) => Promise<void> | void;
};
