import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-bottom: 100px;
  //border: 1px solid red;
  //padding-left: 10px;
`;

export const TopLine = styled.div`
  width: 100%;
  border-top: 4px solid #e0e0e0;
  margin-bottom: 50px;
`;

export const Header = styled.div`
  padding-bottom: 30px;
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid lightgrey;
  margin-right: 30px;
  padding-left: 15px;
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid lightgrey;
   margin-right: 30px;
  padding-left: 15px;
`;

export const Body = styled.div`
  width: 100%;
  height: 161px;
`;
export const Contents = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 15px;
  resize: none;
  border: 1px solid lightgrey;
`;

export const Footer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const SubmitButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #ffd600;
  }
`;
