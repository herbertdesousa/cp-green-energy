import { useEffect, useState } from "react";

import { httpClient } from "../repository/HttpClient";
import { AsyncData } from "../types/AsyncData";
import { delay } from "../utils/delay";

type Source = {
  id: string;
  label: string;
  activeAmount: number;
}

export function useSourcePower() {
  const [source, setSource] = useState<AsyncData<Source[]>>({
    type: 'LOADING',
  });

  useEffect(() => {
    delay(200).then(() => {
      httpClient.get<Source[]>('/sources')
        .then(({ data }) => setSource({ type: 'SUCCESS', data }));
    });
  }, []);

  return { source };
}
