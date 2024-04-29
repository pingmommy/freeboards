import { useRecoilState } from "recoil";
import * as S from "./banner.styles";
import { isLoggedState } from "../../../../commons/stores";
import type { IQuery } from "../../../../commons/types/generated/types";

interface ILayoutHeaderUIPros {
  onclickGoToMenu: () => void;
  onclickLogin: () => void;
  onclickSignUp: () => void;
  onclickInfoToggle: () => void;
  openInfo: boolean;
  data?: Pick<IQuery, "fetchUserLoggedIn">;
}

export default function LayoutHeaderUI(
  props: ILayoutHeaderUIPros,
): JSX.Element {
  const [isLogged] = useRecoilState(isLoggedState);
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/freeboardLogo.png"
        alt=""
        onClick={props.onclickGoToMenu}
      />

      {isLogged ? (
        <S.flexWrapper>
          <S.LogIn onClick={props.onclickLogin}>로그인</S.LogIn>
          <S.SignIn onClick={props.onclickSignUp}>회원가입</S.SignIn>
        </S.flexWrapper>
      ) : (
        <S.flexWrapper>
          <img src="/images/avatar.png" />

          <S.infoButton onClick={props.onclickInfoToggle}></S.infoButton>

          {props.openInfo ? (
            <></>
          ) : (
            <S.infoBox>
              <S.infoSpan>{`${props.data?.fetchUserLoggedIn?.name}`}</S.infoSpan>
              <S.infoLine></S.infoLine>
              <S.infoSpan>{`${props.data?.fetchUserLoggedIn?.email}`}</S.infoSpan>
            </S.infoBox>
          )}
        </S.flexWrapper>
      )}
    </S.Wrapper>
  );
}
