import type { ChangeEvent } from "react";

export interface IUserLogInUIProps {
  onclickSubmit: () => void;
  onchangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
}
