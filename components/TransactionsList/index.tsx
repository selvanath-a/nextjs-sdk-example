import {
  CoinTransaction,
  TokenBalance,
  TokenTransaction,
} from "@paytweed/frontend-sdk-react";
import { SubTitle, Table, Td, Th } from "../../style";

const chains = ["tezosGhost", "polygonMumbai", "ethereumGoerli"];

interface Data {
  [k: string]: Array<CoinTransaction | TokenTransaction>;
}

const TransactionsList: React.FC<{ data: Data }> = ({ data }) => {
  const chain = Object.keys(data)[0];
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>
              <SubTitle>{chain}</SubTitle>
            </th>
          </tr>
          <tr>
            <Th>Created At</Th>
            <Th>Crypto Currency Amount</Th>
            <Th>Token Name</Th>
            <Th>Token Symbol</Th>
            <Th>Direction</Th>
            <Th>From Address</Th>
            <Th>To Address</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {data[chain].map((entry) => {
            const tokenMetadata = (entry as TokenTransaction)?.['tokenMetadata']
            const coinMetadata = (entry as CoinTransaction)?.['coinMetadata']

            return (<tr key={entry.id}>
              <Td>{entry.createdAt}</Td>
              <Td>{entry.value}</Td>
              <Td>
                {tokenMetadata?.tokenName ||
                  coinMetadata?.coinName}
              </Td>
              <Td>
                {tokenMetadata?.tokenSymbol ||
                  coinMetadata?.coinSymbol}
              </Td>
              <Td>{entry.direction}</Td>
              <Td>{entry.fromAddress}</Td>
              <Td>{entry.toAddress}</Td>
              <Td>{entry.status}</Td>
            </tr>)}
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TransactionsList;
