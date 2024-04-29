import { useState } from "react";
import type { ChangeEvent } from "react";
import SignUpUI from "./signup.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.queries";

export default function SignUp(): JSX.Element {
  const [createUser] = useMutation(CREATE_USER);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onchangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const onchangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onchangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onclickSignUp = async (): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            name,
            password,
          },
        },
      });
      console.log(result);
      alert("가입을 축하드립니다!!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <SignUpUI
      onchangeName={onchangeName}
      onchangeEmail={onchangeEmail}
      onchangePassword={onchangePassword}
      onclickSignUp={onclickSignUp}
    />
  );
}
