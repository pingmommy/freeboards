import type { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWriteProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
}

export interface FormInput {
  name: string;
  remarks: string;
  contents: string;
  price: number;
}
