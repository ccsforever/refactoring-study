import React, { createContext, useReducer } from "react";
import { useFormContext } from "react-hook-form";
import Province from "../utils/province";
import Demand from "./Demand";
import Producers from "./Producers";
import ProductResult from "./ProductResult";
import Title from "./Title";

export const UserContext = createContext({
  loggedIn: { value: false },
  loading: { value: false },
});

export const UserDispatch = createContext(null);
function countActiveUsers(users: any) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user:any) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user:any) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user:any) => user.id !== action.id),
      };
    default:
      return state;
  }
}

const ProductPlan: React.FC<ProductPlanProps> = ({ province }) => {
  const loginInfo = {
    loggedIn: { value: false },
    loading: { value: false },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const methods = useFormContext();
  return (
    <UserContext.Provider value={loginInfo}>
      <div>{loginInfo.loggedIn.value ? "로그인" : "로그인안해"}</div>
      <div>{loginInfo.loading.value ? "로딩중" : "로딩안해"}</div>
      <Title title={province.name} />
      <Demand
        demand={province.demand}
        price={province.price}
        methods={methods}
      />
      <Producers producers={province.producers} />
      <ProductResult shortfall={province.shortfall} profit={province.profit} />
    </UserContext.Provider>
  );
};

type ProductPlanProps = {
  province: Province;
};

export default ProductPlan;
