import { Attributes } from "./attributes.type";

export type Universities = Pick<
  Attributes,
  | "companyTitle"
  | "description"
  | "endAt"
  | "jobTitle"
  | "software_id"
  | "startAt"
  | "id"
>;
export type University = Omit<Universities, "id">;
