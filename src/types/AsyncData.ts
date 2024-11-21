export type AsyncData<Data> = {
  type: 'LOADING';
} | {
  type: 'SUCCESS';
  data: Data;
} | {
  type: 'ERROR';
  message: string;
}

export function valueOrEmpty<T>(
  asyncData: AsyncData<T>,
  value: T,
): T {
  return asyncData.type === 'SUCCESS' ? asyncData.data : value;
}