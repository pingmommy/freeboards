import { useRouter } from "next/router";
import LayoutHeaderUI from "./banner.presenter";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import type { IQuery } from "../../../../commons/types/generated/types";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [openInfo, setOpenInfo] = useState(true);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const onclickGoToMenu = (): void => {
    void router.push("/boards");
  };

  const onclickLogin = (): void => {
    void router.push("/login");
  };

  const onclickSignUp = (): void => {
    void router.push("/signup");
  };

  const onclickInfoToggle = (): void => {
    setOpenInfo((prev) => !prev);
    console.log(openInfo);
  };

  return (
    <LayoutHeaderUI
      onclickGoToMenu={onclickGoToMenu}
      onclickLogin={onclickLogin}
      onclickSignUp={onclickSignUp}
      onclickInfoToggle={onclickInfoToggle}
      openInfo={openInfo}
      data={data}
    />
  );
}
