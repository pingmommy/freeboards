import styled from "@emotion/styled";
import { CaretDownOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  height: 100px;
  margin-top: 30px;
  width: 100%;
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
  background-color: #ffffff;
  top: 60px;
  left: -38px;
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 0 #bdbdbd;
  display: flex;
  flex-direction: column;
`;
export const infoAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const infoAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

export const infoName = styled.span`
  text-align: center;
  font-weight: 600;
`;
export const infoPoint = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  padding-top: 3px;
`;

export const infoLine = styled.div`
  border: 1px solid #4f4f4f;
  width: 100%;
`;

export const infoFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 50px 20px 30px;
  align-items: center;
`;
export const infoSavings = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const infoSpan = styled.span`
  width: 100px;
  color: #828282;
  padding: 0px 0 0 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const infoButton = styled(CaretDownOutlined)`
  padding-left: 30px;
  padding-top: 20px;
`;
