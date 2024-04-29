import styled from "@emotion/styled";

export const container = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  //align-items: center; /* 수직 가운데 정렬 */
  width: 100vw; /* 화면 너비 */
  height: 100vh; /* 화면 높이 */
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const title = styled.h1`
  color: #828282;
`;

export const InputWrapper = styled.div`
  padding: 20px 15px;
  border: 1px solid #bdbdbd;
  margin-top: 20px;
  border-radius: 7px;
`;

export const SignUpInput = styled.input`
  width: 400px;
  font-size: 18px;

  border: none;

  :focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

export const SubmitButton = styled.button`
  width: 440px;
  font-size: 25px;
  font-weight: 600;
  border: none;
  background: #ffd600;
  color: #828282;
  padding: 15px 0;
  border-radius: 7px;
`;
