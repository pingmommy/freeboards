import * as S from "./signup.styles";
import type { ISignUpUIProps } from "./signup.types";

export default function SignUpUI(props: ISignUpUIProps): JSX.Element {
  return (
    <S.container>
      <S.Wrapper>
        <S.title>가입하세요.</S.title>
        <S.InputWrapper>
          <S.SignUpInput
            type="text"
            placeholder="이름"
            onChange={props.onchangeName}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.SignUpInput
            type="text"
            placeholder="이메일"
            onChange={props.onchangeEmail}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.SignUpInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onchangePassword}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.SubmitButton onClick={props.onclickSignUp}>
            가입하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.container>
  );
}
