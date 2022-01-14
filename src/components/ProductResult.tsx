const ProductResult: React.FC<ProductResultProps> = ({
  shortfall,
  profit,
}) => {
  return (
    <>
      <div>{"부족분 : " + shortfall + " \t총수익 : " + profit}</div>
    </>
  );
};

type ProductResultProps = {
  shortfall: number;
  profit: number;
};
export default ProductResult;
