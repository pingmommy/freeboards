import type { IQuery } from "../../../../commons/types/generated/types";

export interface ILayoutHeaderUIPros {
  onclickGoToMenu: () => void;
  onclickLogin: () => void;
  onclickSignUp: () => void;
  onclickInfoToggle: () => void;
  openInfo: boolean;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}
