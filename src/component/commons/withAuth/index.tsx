import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";

/* eslint-disable react/display-name */
export const WithAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (accessToken === "") {
      alert("로그인 후 이용가능합니다.");
      void router.push("/login");
    }
  }, []);

  return <Component {...props}></Component>;
};
