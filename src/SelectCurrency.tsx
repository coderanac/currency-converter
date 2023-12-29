import { useQuery } from "react-query";
import {
  CurrencyOption,
  fetchListCurrencies,
  InterfaceCurrencies,
} from "./data";

function SelectCurrency({ onSelectCode }: any) {
  const { data: currencies, isLoading } = useQuery<InterfaceCurrencies[]>({
    queryFn: () => fetchListCurrencies(),
    queryKey: ["currencies"],
  });

  const listCurrencies: CurrencyOption[] = [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (currencies) {
    Object.entries(currencies[0]).forEach(([key, name]) => {
      if (typeof key === "string" && typeof name === "string") {
        listCurrencies.push({ key, name });
      }
    });
  }

  return (
    <select
      name=""
      id="currenciesSelect"
      className="curriencies-list"
      onChange={(e) => onSelectCode(e.target.value)}
    >
      <option value="">Select</option>
      {listCurrencies?.map((currency) => (
        <option key={currency.key} value={currency.key}>
          {currency.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCurrency;
