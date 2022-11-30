import { useRouter } from "next/router";
import products from "../DB";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((a) => a.id === id);
  return (
    <div>
      <p>{product?.name}</p>
    </div>
  );
};

export default Details;
