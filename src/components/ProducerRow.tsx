import * as React from "react";
import { Producer } from "../utils/province";
const ProducerRow: React.FC<ProducerRowProps> = ({ producer }) => {
  const [inputCost, setInputCost] = React.useState(producer.cost);
  const [inputProduction, setInputProduction] = React.useState(
    producer.production
  );
  return (
    <tr key={producer.name}>
      <td>{producer.name}</td>
      <td>
        <input
          type="number"
          name={"cost"}
          value={inputCost}
          onChange={(e) => {
            setInputCost(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="number"
          name={"production"}
          value={inputProduction}
          onChange={(e) => {
            setInputProduction(e.target.value);
          }}
        />
      </td>
      <td>{producer.cost*producer.production}</td>
    </tr>
  );
};

type ProducerRowProps = {
  producer: Producer;
};
export default ProducerRow;
