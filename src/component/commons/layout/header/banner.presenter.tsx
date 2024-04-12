import * as S from "./banner.styles";

interface ILayoutHeaderUIPros {
  onclickGoToMenu: () => void;
}

export default function LayoutHeaderUI(
  props: ILayoutHeaderUIPros,
): JSX.Element {
  return (
    <S.Wrapper>
      <S.Logo
        src="/images/freeboardLogo.png"
        alt=""
        onClick={props.onclickGoToMenu}
      />
      <S.flexWrapper>
        <S.LogIn>로그인</S.LogIn>
        <S.SignIn>회원가입</S.SignIn>
      </S.flexWrapper>
    </S.Wrapper>
  );
}
