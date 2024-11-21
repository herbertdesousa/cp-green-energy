import { httpClient } from "../repository/HttpClient";
import { AsyncData } from "../types/AsyncData";
import { delay } from "../utils/delay";
import { create } from "zustand";

type Source = {
  id: string;
  label: string;
  activeAmount: number;
}

type Power = {
  id: string;
  label: string;
  status: boolean;
};

export type SourceDetails = {
  id: string;
  label: string;
  powers: Power[];
};

type Actions = {
  getDetails: (sourceId: string) => Promise<SourceDetails>;
};
type States = {
  source: AsyncData<Source[]>;
};

export const useSourcePower = create<States & Actions>((set) => {
  delay(200).then(() => {
    httpClient.get<Source[]>('/sources')
      .then(({ data }) => set({ source: { type: 'SUCCESS', data } }));
  });

  return {
    source: { type: 'LOADING' },
    getDetails: async (sourceId) => {
      const { data } = await httpClient.get<SourceDetails>(`/sources/${sourceId}`);
      return data;
    }
  };
});
