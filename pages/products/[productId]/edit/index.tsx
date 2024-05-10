import { useQueryIdChecker } from "../../../../src/component/commons/hooks/customs/useQueryIdChecker";
import { useQueryFetchUsedItem } from "../../../../src/component/commons/hooks/queries/useQueryFetchUseditem";
import ProductWrite from "../../../../src/component/unit/products/write/write.index";

export default function ProductDetailEditPage(): JSX.Element {
  const { id } = useQueryIdChecker("productId");
  const { data } = useQueryFetchUsedItem(id);
  console.log(data);
  return <ProductWrite data={data} isEdit={true} />;
}
