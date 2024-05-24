import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  //border: 3px solid red;
`;

export const CardWrapper = styled.div`
  width: 1200px;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  width: 85%;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

export const CreateAt = styled.div``;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div``;
export const Contents = styled.div``;

export const UploadImg = styled.img`
  width: 996px;
  height: 480px;
`;

export const BottomWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;
`;
export const Button = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  padding: 14px, 60px, 14px, 60px;
  margin-left: 20px;
`;

export const flexWrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  padding-bottom: 50px;
`;

export const likeWrapper = styled.div`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-right: 30px;
`;

export const img = styled.img`
  width: 24px;
  height: 24px;
`;

export const thumbUpNumber = styled.div`
  width: 40px;
  height: 27px;
  color: #ffd600;
  text-align: center;
`;

export const thumbDownNumber = styled.div`
  width: 40px;
  height: 27px;
  color: #828282;
  text-align: center;
`;
