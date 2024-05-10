import { useState } from "react";
import type { ChangeEvent } from "react";
import { useLoadingPoint } from "../../../commons/hooks/customs/useLoadingPoint";
import * as S from "./point.loading.style";

export default function LoadingPoint(): JSX.Element {
  const { onClickLoadingPoint } = useLoadingPoint();
  const [amount, setAmount] = useState(0);

  const onClickAmount = (value: number) => () => {
    setAmount((prev) => prev + value);
  };

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <S.wrapper>
      <S.innerWrapper>
        <S.titleWrapper>
          <h2>충전하기</h2>
        </S.titleWrapper>
        <S.inputWrapper>
          <S.Input
            type="text"
            placeholder="충전할 금액을 입력하세요."
            onChange={onChangeAmount}
            value={amount}
          />
        </S.inputWrapper>
        <S.ULWrapper>
          <S.UL>
            <S.LiHead>
              <S.LiButton onClick={onClickAmount(100)}>+100</S.LiButton>
            </S.LiHead>
            <S.LiBody>
              <S.LiButton onClick={onClickAmount(200)}>+200</S.LiButton>
            </S.LiBody>
            <S.LiBody>
              <S.LiButton onClick={onClickAmount(300)}>+300</S.LiButton>
            </S.LiBody>
            <S.LiTail>
              <S.LiButton onClick={onClickAmount(400)}>400</S.LiButton>
            </S.LiTail>
          </S.UL>
        </S.ULWrapper>
        <S.buttonWrapper>
          <S.Button onClick={onClickLoadingPoint(amount)}>충전하기</S.Button>
        </S.buttonWrapper>
      </S.innerWrapper>
    </S.wrapper>
  );
}
