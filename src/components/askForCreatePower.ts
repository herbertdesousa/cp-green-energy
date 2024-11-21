import { Source } from "../hooks/useSourcePower";

type AskForCreatePower<T> =
  | { type: 'ERROR'; message: string }
  | { type: 'SUCCESS' } & T;

export function askForSource(sources: Source[]): AskForCreatePower<{ source: Source }> {
  const indexSourceStr = prompt(`Digite o número da nova fonte:\n${sources.map((item, idx) => `${idx + 1} - ${item.label}`).join('\n')}`)

  const indexSource = parseInt(indexSourceStr ?? '0');
  const source = sources[indexSource - 1];

  if (Number.isNaN(indexSource) || !source) {
    return { type: 'ERROR', message: 'Fonte inválido' }
  }

  return { type: 'SUCCESS', source } ;
}

export function askForLabel(): AskForCreatePower<{ label: string }> {
  const label = prompt('Qual o nome da fonte?');

  if (!label) {
    return { type: 'ERROR', message: 'Nome inválido' };
  }

  return { type: 'SUCCESS', label };
}
