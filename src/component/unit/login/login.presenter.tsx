import * as S from "./login.styles";
import type { IUserLogInUIProps } from "./login.types";

export default function UserLogInUI(props: IUserLogInUIProps): JSX.Element {
  return (
    <S.container>
      <S.wrapper>
        <S.LogoTitle>로그인페이지</S.LogoTitle>
        <S.EmailWrapper>
          <S.LoginInput
            type="text"
            onChange={props.onchangeEmail}
            placeholder="이메일"
          />
        </S.EmailWrapper>
        <S.PasswordWrapper>
          <S.LoginInput
            type="password"
            onChange={props.onchangePassword}
            placeholder="비밀번호"
          />
        </S.PasswordWrapper>
        <S.ButtonWrapper>
          <S.LoginButton onClick={props.onclickSubmit}>로그인</S.LoginButton>
        </S.ButtonWrapper>
      </S.wrapper>
    </S.container>
  );
}
