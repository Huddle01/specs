import React from 'react';
import { StatusToBgColor, type TStatus } from './specLegend';

type TRowData = {
  number: string;
  section: string;
  state: TStatus;
  audit: TStatus;
  children?: TRowData[];
};

const data: TRowData[] = [
  {
    number: '1',
    section: 'Introduction',
    state: 'Reliable',
    audit: '',
  },
  {
    number: '1.2',
    section: 'Architecture Diagrams',
    state: 'Reliable',
    audit: '',
  },
  {
    number: '1.3',
    section: 'Key Concepts',
    state: 'Reliable',
    audit: '',
  },
  {
    number: '2',
    section: 'Systems',
    state: 'Reliable',
    audit: '',
  },
  {
    number: '2.1',
    section: 'Huddle01 Nodes',
    state: 'Stable',
    audit: '',
    children: [
      {
        number: '2.1.1',
        section: 'Node Types',
        state: 'Stable',
        audit: 'Draft/WIP',
      },
      {
        number: '2.1.2',
        section: 'Media Nodes',
        state: 'Stable',
        audit: 'Draft/WIP',
      },
      {
        number: '2.1.3',
        section: 'Registry Nodes',
        state: 'Stable',
        audit: 'Draft/WIP',
      },
      {
        number: '2.1.4',
        section: 'Orchestrator Nodes',
        state: 'Stable',
        audit: 'Draft/WIP',
      },
    ],
  },
];

const SpecStatus = () => {
  const renderRows = (rows: TRowData[]) => {
    return rows.map((row) => (
      <React.Fragment>
        <tr className="border-t-[1px] border-gray-500">
          <td className="px-6 py-4 whitespace-nowrap text-blue-500">
            <a href={row.audit}>
              {row.number} {row.section}
            </a>
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap text-black ${StatusToBgColor[row.state]}`}
          >
            {row.state}
          </td>
          <td
            className={`px-6 py-4 whitespace-nowrap text-black ${StatusToBgColor[row.audit]}`}
          >
            {row.audit}
          </td>
        </tr>
        {row.children && renderRows(row.children)}
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Section
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              State
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Theory Audit
            </th>
          </tr>
        </thead>
        <tbody>{renderRows(data)}</tbody>
      </table>
    </div>
  );
};

export { SpecStatus };
