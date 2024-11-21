import classNames from "classnames";
import { useEffect, useState } from "react";
import { MdArrowBack, MdList, MdOutlineGridView } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import { askForLabel } from "../components/askForCreatePower";
import { Button } from "../components/Button";
import { SourceDetails, useSourcePower } from "../hooks/useSourcePower";
import { AsyncData } from "../types/AsyncData";

export function PowerDetails() {
  const { powerSource: sourceId } = useParams();

  if (!sourceId) return <p>Falha ao obter a Fonte de Luz</p>

  return <Main sourceId={sourceId} />;
}

type Props = { sourceId: string };
function Main({ sourceId }: Props) {
  const { getDetails, toggleLight, create } = useSourcePower();

  const [data, setData] = useState<AsyncData<SourceDetails>>({
    type: 'LOADING',
  });

  async function fetchDetails() {
    const data = await getDetails(sourceId);

    setData({ type: 'SUCCESS', data });
  }

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleTogleLight(powerId: string) {
    toggleLight(sourceId, powerId);
    
    // updating data in-memory
    setData(old => {
      if (old.type !== 'SUCCESS') return old;

      return {
        type: 'SUCCESS',
        data: {
          ...old.data,
          powers: old.data.powers.map(power => {
            if (power.id !== powerId) return power;

            return {
              ...power,
              status: !power.status,
            };
          }),
        },
      };
    });
  }

  async function createPower() {
    while(true) {
      const labelRes = askForLabel();

      if (labelRes.type === 'ERROR') {
        alert(labelRes.message);
        continue;
      }

      await create({ sourceId, label: labelRes.label });
      await fetchDetails();

      break;
    }
  }

  const powers = data.type === 'SUCCESS' ? data.data.powers : [];

  const [viewMode, setViewMode] = useState<'GRID' | 'LIST'>('GRID');

  function toggleViewMode() {
    setViewMode(old => old === 'GRID' ? 'LIST' : 'GRID');
  }

  return (
    <div>
      <header className="flex flex-col gap-8 pl-8 md:pl-0 md:pt-8">
        <Link to="..">
          <MdArrowBack size={20} />
        </Link>

        <div className="flex justify-between">
          <h1 className="text-4xl font-medium">
            {data.type === 'SUCCESS' ? data.data.label : ''}
          </h1>

          <Button onClick={createPower}>+ Novo</Button>
        </div>

        <section className="flex flex-col">
          <div className="ml-auto">
            <Button className="text-white" onClick={toggleViewMode}>
              {viewMode === 'GRID' && <MdList size={20} />}
              {viewMode === 'LIST' && <MdOutlineGridView size={20} />}
            </Button>
          </div>

          <ul
            className={classNames(
              "grid gap-x-4 gap-y-2",
              viewMode === 'GRID' && 'grid-cols-2',
              viewMode === 'LIST' && 'grid-cols-1',
            )}
          >
            {powers.map(power => (
              <li key={power.id} className="flex justify-between items-center">
                {power.label}

                <button
                  type="button"
                  className={classNames(
                    'px-4 py-1 rounded border border-white border-opacity-25',
                    'hover:bg-[#383935]  transition-opacity text-white',
                    !power.status && 'text-opacity-50'
                  )}
                  onClick={() => handleTogleLight(power.id)}
                >
                  {power.status ? 'desligar' : 'ligar'}
                </button>
              </li>
            ))}
          </ul>
        </section>
      </header>
    </div>
  );
}
