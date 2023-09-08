export type FieldOrder = "name" | "dueDateTime";

export type DirectionOrder = "asc" | "desc";

export interface Order {
  direction: DirectionOrder;
  field: FieldOrder;
}
