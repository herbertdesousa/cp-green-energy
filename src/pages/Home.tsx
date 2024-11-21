import classNames from "classnames";
import { MdArrowBack } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { askForLabel, askForSource } from "../components/askForCreatePower";
import { Button } from "../components/Button";
import { ProgressRing } from "../components/ProgressRing";
import { useBalance } from "../hooks/useBalance";
import { useName } from "../hooks/useName";
import { useSourcePower } from "../hooks/useSourcePower";
import { valueOrEmpty } from "../types/AsyncData";

export function Home() {
  const { username } = useName();
  const { balance } = useBalance();
  const { source, create } = useSourcePower();

  const navigate = useNavigate();

  const sources = valueOrEmpty(source, []);

  async function handleCreate() {
    while (true) {
      const sourceRes = askForSource(sources);

      if (sourceRes.type === 'ERROR') {
        alert(sourceRes.message);
        continue;
      }

      const labelRes = askForLabel();

      if (labelRes.type === 'ERROR') {
        alert(labelRes.message);
        continue;
      }

      await create({ sourceId: sourceRes.source.id, label: labelRes.label });

      navigate(`/${sourceRes.source.id}`);

      break;
    }
  }

  return (
    <>
      <header className="px-4">
        <h1 className="text-3xl font-medium">
          <span className="opacity-80">Olá,</span> {valueOrEmpty(username, '')}
        </h1>
      </header>

      <section className="mx-auto">
        <ProgressRing progress={balance.type === 'LOADING' ? 0 : 28} size={290}>
          {balance.type === 'LOADING' && (
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="text-4xl font-semibold fill-current text-white"
            >
              - - -
            </text>
          )}
          {balance.type === 'SUCCESS' && (
            <>
              <text
                x="50%"
                y="46%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-4xl font-semibold fill-current text-white"
              >
                {balance.data.amount}
              </text>

              <text
                x="50%"
                y="58%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-sm font-semibold fill-current text-white text-opacity-60"
              >
                fecha em {balance.data.closesIn}
              </text>
            </>
          )}
        </ProgressRing>
      </section>

      <footer className="flex flex-col gap-4">
        <div className="flex justify-between px-4">
          <h3 className="font-medium text-xl">Ativos Agora</h3>
          {source.type === 'SUCCESS' && <Button onClick={handleCreate}>+ Novo</Button>}
        </div>

        <ul className="flex gap-2 overflow-auto px-4 no-scroll">
          {source.type === 'LOADING' && [1, 2, 3, 4].map((i) => (
            <li key={i} className="w-32 h-20 bg-gray-200 bg-opacity-15 animate-pulse rounded-lg"></li>
          ))}
          {sources.map((item) => (
            <li key={item.id}>
              <Link
                to={`/${item.id}`}
                className={classNames(
                  'flex flex-col gap-y-2',
                  'w-32 min-w-32 border-2 border-[#2E3021] rounded-lg p-2',
                )}
              >
                <span className="text-xs">{item.label}</span>

                <div className="flex justify-between">
                  <div className="flex items-end gap-1">
                    <span className="text-xl">{item.activeAmount}</span>
                    <span className="opacity-70">Ativas</span>
                  </div>

                  <span className="p-1 border-2 border-[#63645f] rounded-full">
                    <MdArrowBack size={20} className="rotate-[135deg]" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}
