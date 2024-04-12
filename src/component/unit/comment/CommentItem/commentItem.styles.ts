import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin-left: 100px;
  margin-bottom: 100px;
  //border: 1px solid red;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContentsWrapper = styled.div`
  //border: 1px solid blue;
  //padding: 10px 0px;
  width: 90%;
`;
export const WriterWrapper = styled.div`
display: flex;
flex-direction: row;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const Writer = styled.div`
  height: 24px;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Contents = styled.div`
  font-size: 16px;
  height: 24px;
  //border: 1px solid pink;
`;
export const CreatedAt = styled.div`
  height: 18px;
  font-size: 12px;
  color: #bdbdbd;
  margin: 10px 0px;
  //border: 1px solid yellow;
`;

export const ButtonWrapper = styled.div``;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;

  :hover {
    background-color: #ffd600;
  }
`;
export const ButtonImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const BottomLine = styled.div`
  border-bottom: 1px solid grey;
  margin-bottom: 30px;
`;
