import { useRecoilState } from "recoil";
import * as S from "./banner.styles";
import { isLoggedState } from "../../../../commons/stores";
import type { ILayoutHeaderUIPros } from "./header.types";
import { useMoveToPage } from "../../hooks/customs/useMoveToPage";

export default function LayoutHeaderUI(
  props: ILayoutHeaderUIPros,
): JSX.Element {
  const { onclickMoveToPage } = useMoveToPage();
  const [isLogged] = useRecoilState(isLoggedState);
  return (
    <S.Wrapper>
      <S.Logo src="/images/freeboardLogo.png" onClick={props.onclickGoToMenu} />
      {isLogged ? (
        <S.flexWrapper>
          <S.LogIn onClick={props.onclickLogin}>로그인</S.LogIn>
          <S.SignIn onClick={props.onclickSignUp}>회원가입</S.SignIn>
        </S.flexWrapper>
      ) : (
        <S.flexWrapper>
          <img src="/images/avatar.png" />
          <S.infoButton onClick={props.onclickInfoToggle} />
          {props.openInfo ? (
            <></>
          ) : (
            <S.infoBox>
              <S.infoFlexWrapper>
                <S.infoAvatar src="/images/avatar.png" />
                <S.infoAvatarWrapper>
                  <S.infoName>{`${props.data?.fetchUserLoggedIn?.name}`}</S.infoName>
                  <S.infoPoint>1000P</S.infoPoint>
                </S.infoAvatarWrapper>
              </S.infoFlexWrapper>
              <S.infoLine></S.infoLine>
              <S.infoFlexWrapper>
                <S.infoSavings src="/images/ic_savings1.png" />
                <S.infoSpan onClick={onclickMoveToPage("/point/loadingPoint")}>
                  충전하기
                </S.infoSpan>
              </S.infoFlexWrapper>
            </S.infoBox>
          )}
        </S.flexWrapper>
      )}
    </S.Wrapper>
  );
}
