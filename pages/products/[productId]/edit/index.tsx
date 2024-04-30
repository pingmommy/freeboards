import { useQueryFetchUsedItem } from "../../../../src/component/commons/hooks/queries/useQueryFetchUseditem";
import ProductWrite from "../../../../src/component/unit/products/write/write.index";

export default function ProductDetailEditPage(): JSX.Element {
  const { data } = useQueryFetchUsedItem();

  return <ProductWrite data={data} isEdit={true} />;
}
