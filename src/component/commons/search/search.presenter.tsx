import type { ISearchKeywordUIProps } from "./search.types";

export default function SearchKeywordUI(
  props: ISearchKeywordUIProps,
): JSX.Element {
  return (
    <>
      <input
        type="text"
        onChange={props.onchangeSearch}
        style={{
          marginBottom: "15px",
          width: "200px",
          height: "35px",
          cursor: "pointer",
        }}
      />
      <button onClick={props.onclickSearch}>검색하기</button>
    </>
  );
}
