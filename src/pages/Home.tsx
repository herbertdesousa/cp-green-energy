import classNames from "classnames"
import { MdArrowBack } from "react-icons/md";

import { ProgressRing } from "../components/ProgressRing";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

type Power = {
  id: string;
  sourceId: string;
  source: string;
  activeAmount: number;
};

const powers: Power[] = [
  { id: 'id-1', sourceId: 'src-1', source: 'Luzes', activeAmount: 5 },
  { id: 'id-2', sourceId: 'src-2', source: 'Geladeira', activeAmount: 2 },
  { id: 'id-3', sourceId: 'src-3', source: "TV's", activeAmount: 2 },
]

export function Home() {
  return (
    <>
      <header className="px-4">
        <h1 className="text-3xl font-medium">
          <span className="opacity-80">Olá,</span> Lucas
        </h1>
      </header>

      <section className="mx-auto">
        <ProgressRing progress={10} size={290}>
          <text
            x="50%"
            y="46%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-4xl font-semibold fill-current text-white"
          >
            R$ 55,90
          </text>

          <text
            x="50%"
            y="58%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-sm font-semibold fill-current text-white text-opacity-60"
          >
            fecha em 15/02
          </text>
        </ProgressRing>
      </section>

      <footer className="flex flex-col gap-4">
        <div className="flex justify-between px-4">
          <h3 className="font-medium text-xl">Ativos Agora</h3>
          <Button>+ Novo</Button>
        </div>

        <ul className="flex gap-2 overflow-auto px-4 no-scroll">
          {powers.map((item) => (
            <li key={item.id}>
              <Link
                to={`/${item.sourceId}`}
                className={classNames(
                  'flex flex-col gap-y-2',
                  'w-32 min-w-32 border-2 border-[#2E3021] rounded-lg p-2',
                )}
              >
              <span className="text-xs">{item.source}</span>

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
