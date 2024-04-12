import {
  Wrapper,
  Title,
  ID,
  Label,
  Password,
} from "../../../styles/login-emotion";

export default function Login() {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Label>아이디</Label>
      <ID type="text" />
      <Label>비밀번호</Label>
      <Password type="password" />
    </Wrapper>
  );
}
