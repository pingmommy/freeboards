import styled from "@emotion/styled";

export const container = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  //align-items: center; /* 수직 가운데 정렬 */
  width: 100vw; /* 화면 너비 */
  height: 100vh; /* 화면 높이 */
`;

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 500px;
  height: 300px;
  margin-top: 50px;
`;

export const EmailWrapper = styled.div`
  padding: 20px 15px;
  border: 1px solid #bdbdbd;
  border-radius: 10px 10px 0 0;
`;
export const PasswordWrapper = styled.div`
  padding: 20px 15px;
  border: 1px solid #bdbdbd;
  border-top: none;
  border-radius: 0 0 10px 10px;
`;

export const LogoTitle = styled.h1`
  padding-bottom: 20px;
  color: #828282;
`;

export const LoginInput = styled.input`
  width: 400px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 30px;
`;
export const LoginButton = styled.button`
  width: 440px;
  font-size: 30px;
  font-weight: 600;
  color: #828282;
  padding: 15px 0;
  background-color: #ffd600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
