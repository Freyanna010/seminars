import { Seminar } from "@/types/types";

export type CardProps = Seminar & {
    onDelete: (id: number) => void;
  };