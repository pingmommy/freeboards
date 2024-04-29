import { useState } from "react";
import type { ChangeEvent } from "react";
import UserLogInUI from "./login.presenter";
import { gql, useMutation } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoggedState } from "../../../commons/stores";
import type {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../commons/types/generated/types";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function UserLogIn(): JSX.Element {
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setIsLogged] = useRecoilState(isLoggedState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onchangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const onchangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const onclickSubmit = async (): Promise<void> => {
    try {
      const result = await loginUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result?.data?.loginUser?.accessToken;
      console.log(accessToken);

      if (accessToken === undefined) {
        alert("에러네요!");
        return;
      }
      setAccessToken(accessToken);
      setIsLogged(false);
      void router.push("/boards");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <UserLogInUI
      onchangeEmail={onchangeEmail}
      onchangePassword={onchangePassword}
      onclickSubmit={onclickSubmit}
    />
  );
}
