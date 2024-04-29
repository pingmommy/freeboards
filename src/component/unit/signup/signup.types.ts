import type { ChangeEvent } from "react";

export interface ISignUpUIProps {
  onchangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onchangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onclickSignUp: () => void;
}
