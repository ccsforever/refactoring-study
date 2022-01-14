import React, { useContext } from "react";
import { UserContext } from "./ProductPlan";
const Demand: React.FC<DemandProps> = ({ demand, price, methods }) => {
  const [inputDemand, setInputDemand] = React.useState(demand);
  const [inputPrice, setInputPrice] = React.useState(price);

  const loginInfo = useContext(UserContext);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            loginInfo.loading.value = true;
          }}
        >
          로딩중
        </button>
        <button
          onClick={() => {
            loginInfo.loading.value = false;
          }}
        >
          로딩끝
        </button>
        <button
          onClick={() => {
            loginInfo.loggedIn.value = !loginInfo.loggedIn.value;
          }}
        >
          로그인토글
        </button>
      </div>
      수요:{" "}
      <input
        type="number"
        name="demand"
        value={inputDemand}
        onChange={(e) => {
          setInputDemand(parseInt(e.target.value));
        }}
      />
      가격:{" "}
      <input
        type="number"
        name="price"
        value={inputPrice}
        onChange={(e) => {
          setInputPrice(parseInt(e.target.value));
        }}
      />
    </div>
  );
};

type DemandProps = {
  demand: number;
  price: number;
  methods: any;
};
export default Demand;
