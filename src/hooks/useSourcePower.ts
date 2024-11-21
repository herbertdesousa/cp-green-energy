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
  toggleLight: (sourceId: string, powerId: string) => Promise<void>;
};
type States = {
  source: AsyncData<Source[]>;
};

export const useSourcePower = create<States & Actions>((set) => {
  async function fetch() {
    const { data } = await httpClient.get<Source[]>('/sources')
    set({ source: { type: 'SUCCESS', data } });
  }

  delay(200).then(fetch);

  return {
    source: { type: 'LOADING' },
    getDetails: async (sourceId) => {
      const { data } = await httpClient.get<SourceDetails>(`/sources/${sourceId}`);
      return data;
    },
    toggleLight: async (sourceId, powerId) => {
      await httpClient.patch(`/sources/${sourceId}/${powerId}`);
      await fetch();
    },
  };
});
