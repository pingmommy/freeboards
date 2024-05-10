import BoardCommentList from "../../../src/component/unit/comment/list/boardCommentList.container";
import BoardCommentWrite from "../../../src/component/unit/comment/write/boardCommentWrite.container";
import BoardDetail from "../../../src/component/unit/boards/detail/boardDetail.container";

export default function BoardDetailPage(): JSX.Element {
  return (
    <>
      <BoardDetail></BoardDetail>
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
