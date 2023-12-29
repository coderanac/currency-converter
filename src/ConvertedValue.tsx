import { useQuery } from "react-query";
import { fetchConverter } from "./data";
import { Calculator } from "./Calculator";

type SelectedCurrencyProps = {
  code: string;
  codein: string;
  multiplier: number;
};

function ConvertedValue(props: SelectedCurrencyProps) {
  const { data: converted, isLoading } = useQuery<any>({
    queryFn: () => fetchConverter(props.code, props.codein),
    queryKey: ["converted"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let total: string = "";

  if (converted) {
    const convertedNumber = Math.floor(converted["low"]);
    total = Calculator(convertedNumber, props.multiplier);
  }

  return <section>{converted ? <h2>{total}</h2> : ""}</section>;
}

export default ConvertedValue;
