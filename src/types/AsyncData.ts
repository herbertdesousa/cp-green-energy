export type AsyncData<Data> = {
  type: 'LOADING';
} | {
  type: 'SUCCESS';
  data: Data;
} | {
  type: 'ERROR';
  message: string;
}