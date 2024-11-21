import { useEffect, useState } from "react";

import { AsyncData } from "../types/AsyncData";
import { NameRepository } from "../repository/NameRepository";

const nameStorage = new NameRepository();

function askUserForName(): string {
  const name = prompt('Qual é o seu nome?');

  if (!name) return askUserForName();

  return name;
}

export function useName() {
  const [username, setUsername] = useState<AsyncData<string>>({
    type: 'LOADING',
  });

  useEffect(() => {
    const storedName = nameStorage.get();

    if (!storedName) {
      const name = askUserForName();
      nameStorage.store(name);
      return setUsername({ type: 'SUCCESS', data: name });
    }

    setUsername({ type: 'SUCCESS', data: storedName });
  }, []);

  return { username };
}
