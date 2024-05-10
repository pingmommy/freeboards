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
export const TopColumn20 = styled.div`
  width: 20%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;
export const TopColumn30 = styled.div`
  width: 30%;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const Column20 = styled.div`
  width: 20%;
  text-align: center;
  font-size: 16px;
`;

export const Column30 = styled.div`
  width: 30%;
  text-align: center;
  font-size: 16px;
`;

export const ColumnBalance = styled.div`
  width: 20%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;
export const ColumnAmount = styled.div`
  width: 30%;
  text-align: center;
  font-size: 16px;
  color: #ffd600;
  font-weight: 600;
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
