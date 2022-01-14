import { Producer } from "../utils/province";
import ProducerRow from "./ProducerRow";
const Producers: React.FC<ProducersProps> = ({ producers }) => {
  return (
    <>
      <div>{"생산자 수: " + producers.length}</div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>비용</th>
            <th>생산량</th>
            <th>수익</th>
          </tr>
        </thead>
        <tbody>
          {producers.map((producer) => {
            return <ProducerRow producer={producer} key={producer.name}/>;
          })}
        </tbody>
      </table>
    </>
  );
};

type ProducersProps = {
  producers: Producer[];
};
export default Producers;
