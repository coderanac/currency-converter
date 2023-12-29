export interface InterfaceConvertedData {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

export interface InterfaceCurrencies {
  [codigo: string]: string;
}

export interface CurrencyOption {
  key: string;
  name: string;
}

export async function fetchConverter(
  code: string,
  codein: string
): Promise<InterfaceConvertedData[]> {
  const data = await fetch(
    `https://economia.awesomeapi.com.br/${code}-${codein}/1`
  ).then((response) => response.json());

  return [data][0][0];
}

export async function fetchListCurrencies(): Promise<InterfaceCurrencies[]> {
  const data = await fetch(
    `https://economia.awesomeapi.com.br/json/available/uniq`
  ).then((response) => response.json());

  return [data];
}
