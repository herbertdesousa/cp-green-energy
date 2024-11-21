import { useEffect, useState } from "react";

import { format } from "date-fns";

import { AsyncData } from "../types/AsyncData";
import { httpClient } from "../repository/HttpClient";
import { delay } from "../utils/delay";

type Balance = {
  amount: string;
  closesIn: string;
}

function parseCurrency(value: string): string {
  return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
}

export function useBalance() {
  const [balance, setBalance] = useState<AsyncData<Balance>>({
    type: 'LOADING',
  });

  useEffect(() => {
    delay(500).then(() => {
      httpClient.get<Balance>('/balance')
        .then(({ data }) => {
          setBalance({
            type: 'SUCCESS',
            data: {
              amount: parseCurrency(data.amount),
              closesIn: format(new Date(data.closesIn), 'dd/MM'),
            },
          });
        });
    });
  }, []);

  return { balance };
}
