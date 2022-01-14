import * as React from "react";
import { usd } from "../utils/statement";
const Statement: React.FC<StatementProps> = ({ data }) => {
  console.log(data);
  return (
    <>
      {data && (
        <>
          <h1>{"Statement for " + data?.customer}</h1>
          <table>
            <thead>
              <tr>
                <th>play</th>
                <th>seats</th>
                <th>cost</th>
              </tr>
            </thead>
            <tbody>
              {data.performances &&
                data.performances.map((perf: any) => {
                  return (
                    <tr>
                      <td>{perf.play.name}</td>
                      <td>{perf.audience}</td>
                      <td>{usd(perf.amount)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <p>
            Amount owed is <em>{usd(data.totalAmount)}</em>
          </p>
          <p>
            You earned <em>{data.totalVolumeCredits}</em> credits
          </p>
        </>
      )}
    </>
  );
};

type StatementProps = {
  data: {
    customer: string;
    performances: any;
    totalAmount: number;
    totalVolumeCredits: number;
  };
};

export default Statement;
