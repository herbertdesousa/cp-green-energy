import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import classNames from "classnames";

const DATA = {
  source: 'Luzes',
  items: [
    { id: 'id-1', label: 'Lâmpada 1', isOn: true },
    { id: 'id-2', label: 'Lâmpada 2', isOn: false },
    { id: 'id-3', label: 'Lâmpada 3', isOn: true },
  ]
};

export function PowerDetails() {
  const { powerSource } = useParams();

  if (!powerSource) return <p>Falha ao obter a Fonte de Luz</p>
  return (
    <div>
      <header className="flex flex-col gap-8 pl-8 md:pl-0 md:pt-8">
        <Link to="..">
          <MdArrowBack size={20} />
        </Link>

        <div className="flex justify-between">
          <h1 className="text-4xl font-medium">{DATA.source}</h1>

          <Button>+ Novo</Button>
        </div>

        <ul className="flex flex-col gap-2">
          {DATA.items.map(item => (
            <li key={item.id} className="flex justify-between items-center">
              {item.label}

              <button
                type="button"
                className={classNames(
                  'px-4 py-1 rounded border border-white border-opacity-25',
                  'hover:bg-[#383935]  transition-opacity text-white',
                  !item.isOn && 'text-opacity-50'
                )}
              >
                {item.isOn ? 'desligar' : 'ligar'}
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
