import type { ChangeEvent } from "react";
import _ from "lodash";

import SearchKeywordUI from "./search.presenter";
import type { ISearchKeywordProps } from "./search.types";

export default function SearchKeyword(props: ISearchKeywordProps): JSX.Element {
  const getDebounce = _.debounce((value: string) => {
    void props.refetch({ search: value, page: 1 });
    void props.refetchCount({ search: value });
    props.onchangeKeyword(value);
  }, 500);
  const onchangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.target.value);
  };

  const onclickSearch = (): void => {
    console.log("");
  };

  return (
    <SearchKeywordUI
      onchangeSearch={onchangeSearch}
      onclickSearch={onclickSearch}
    />
  );
}
