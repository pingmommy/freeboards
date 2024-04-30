import { number, object, string } from "yup";

export const schema = object({
  name: string().required("필수입력사항입니다."),
  remarks: string().required("필수입력사항입니다."),
  contents: string().required("필수입력사항입니다."),
  price: number().required("필수입력사항입니다."),
});
