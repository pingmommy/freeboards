import styled from "@emotion/styled";
import { CaretDownOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  height: 100px;
  margin-top: 30px;
  width: 1920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
`;

export const Logo = styled.img`
  width: 236px;
  height: 46px;
  cursor: pointer;
`;

export const flexWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const LogIn = styled.div`
  margin-right: 50px;
  cursor: pointer;
`;

export const SignIn = styled.div`
  cursor: pointer;
`;

export const infoBox = styled.div`
  position: absolute;
  width: 150px;
  height: 100px;
  background-color: #ffffff;
  top: 60px;
  left: -38px;
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0 #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const infoSpan = styled.span`
  text-align: center;
`;

export const infoLine = styled.div`
  border: 1px solid #4f4f4f;
  width: 90%;
`;

export const infoButton = styled(CaretDownOutlined)`
  padding-left: 30px;
  padding-top: 20px;
`;
