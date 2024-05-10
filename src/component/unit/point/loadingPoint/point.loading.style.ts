import styled from "@emotion/styled";

export const wrapper = styled.div`
  width: 780px;
  height: 640px;
  margin: 100px 0 100px 300px;
`;

export const innerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const titleWrapper = styled.div`
  padding-top: 100px;
`;

export const inputWrapper = styled.div`
  padding: 20px 30px 0 0;
  border-bottom: 3px solid lightgray;
`;

export const Input = styled.input`
  padding: 20px 20px 0 0;
  font-size: 20px;
  border: none;
  :focus {
    outline: none;
  }
`;

export const ULWrapper = styled.div`
  padding: 20px;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const LiHead = styled.li`
  border: 1px solid #bdbdbd;
  border-radius: 5px 0 0 5px;
  padding: 10px 15px;
  font-size: 18px;
`;

export const LiBody = styled.li`
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  padding: 10px 15px;
  font-size: 18px;
`;

export const LiTail = styled.li`
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-radius: 0 5px 5px 0;
  padding: 10px 15px;
  font-size: 18px;
`;

export const LiButton = styled.button`
  background: none;
  font-size: 20px;
  border: none;
`;

export const buttonWrapper = styled.div`
  padding: 50px;
`;

export const Button = styled.button`
  padding: 20px 100px;
  border: none;
  background-color: #ffd600;
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
`;
