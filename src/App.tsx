import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import SelectCurrency from "./SelectCurrency";
import ConvertedValue from "./ConvertedValue";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [code, setCode] = useState("");
  const [codein, setCodein] = useState("");
  const [multiplier, setMultiplier] = useState(1);
  const [currency, setCurrency] = useState("");

  function selectCode(code: string) {
    setCode(code);
  }

  function selectCodein(codein: string) {
    setCodein(codein);
  }

  function defineMultiplier(e: any) {
    setMultiplier(e.target.value);
  }

  return (
    <QueryClientProvider client={queryClient}>
      {code && codein ? (
        <ConvertedValue code={code} codein={codein} multiplier={multiplier} />
      ) : (
        ""
      )}
      <section>
        <input type="number" id="code" onInput={defineMultiplier} />
        <SelectCurrency onSelectCode={selectCode} />
      </section>
      <section>
        <input type="number" id="codein" onInput={defineMultiplier} />
        <SelectCurrency onSelectCode={selectCodein} />
      </section>
    </QueryClientProvider>
  );
}

export default App;
