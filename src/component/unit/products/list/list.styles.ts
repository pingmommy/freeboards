import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;
export const Header = styled.div``;

export const Body = styled.div``;

export const DividingLine = styled.div`
  border: 2px solid gray;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid lightgray;
`;
export const TopColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
export const TopColumnTitle = styled.div`
  width: 40%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
  font-size: 16px;
`;
export const ColumnTitle = styled.div`
  width: 40%;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: lightblue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 30px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;
