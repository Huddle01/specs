import React from 'react';

type TRowData = {
  number: string;
  section: string;
  state: string;
  stateClass: string;
  audit: string;
  auditClass: string;
  children?: TRowData[];
}

const data: TRowData[] = [
  {
    number: '1',
    section: 'Introduction',
    state: 'Reliable',
    stateClass: 'bg-green-500',
    audit: '',
    auditClass: ''
  },
  {
    number: '1.2',
    section: 'Architecture Diagrams',
    state: 'Reliable',
    stateClass: 'bg-green-500',
    audit: '',
    auditClass: ''

  },
  {
    number: '1.3',
    section: 'Key Concepts',
    state: 'Reliable',
    stateClass: 'bg-green-500',
    audit: '',
    auditClass: ''
  },

  {
    number: '1.5',
    section: 'System Decomposition',
    state: 'Reliable',
    stateClass: 'bg-green-500',
    audit: '',
    auditClass: '',
    children: [
      {
        number: '1.5.1',
        section: 'What are Systems? How do they work?',
        state: 'Reliable',
        stateClass: 'bg-green-500',
        audit: '',
        auditClass: ''
      },
      {
        number: '1.5.2',
        section: 'Implementing Systems',
        state: 'Draft/WIP',
        stateClass: 'bg-yellow-500',
        audit: '',
        auditClass: ''
      }
    ]
  },
  {
    number: '2',
    section: 'Systems',
    state: 'Reliable',
    stateClass: 'bg-green-500',
    audit: '',
    auditClass: ''
  },
  {
    number: '2.1',
    section: 'Filecoin Nodes',
    state: 'Stable',
    stateClass: 'bg-blue-500',
    audit: '',
    auditClass: '',
    children: [
      {
        number: '2.1.1',
        section: 'Node Types',
        state: 'Stable',
        stateClass: 'bg-blue-500',
        audit: '',
        auditClass: '',
      },
      {
        number: '2.1.2',
        section: 'Node Repository',
        state: 'Stable',
        stateClass: 'bg-blue-500',
        audit: '',
        auditClass: '',
        children: [
          {
            number: '2.1.2.1',
            section: 'Key Store',
            state: 'Reliable',
            stateClass: 'bg-green-500',
            audit: '',
            auditClass: ''
          },
          {
            number: '2.1.2.2',
            section: 'IPLD Store',
            state: 'Stable',
            stateClass: 'bg-blue-500',
            audit: '',
            auditClass: ''
          }
        ]
      },
      {
        number: '2.1.3',
        section: 'Network Interface',
        state: 'Stable',
        stateClass: 'bg-blue-500',
        audit: 'Draft/WIP',
        auditClass: 'bg-yellow-500'
      },
      {
        number: '2.1.4',
        section: 'Clock',
        state: 'Reliable',
        stateClass: 'bg-green-500',
        audit: '',
        auditClass: ''

      }
    ]
  },
];

const SpecStatus = () => {
  const renderRows = (rows: TRowData[]) => {
    return rows.map((row) => (
      <React.Fragment >
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-blue-500">
            <a href={row.audit}>{row.number} {row.section}</a>
          </td>
          <td className={`px-6 py-4 whitespace-nowrap text-black ${row.stateClass}`}>{row.state}</td>
          <td className={`px-6 py-4 whitespace-nowrap text-black ${row.auditClass}`}>{row.audit}</td>
        </tr>
        {row.children && renderRows(row.children)}
      </React.Fragment>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Section
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              State
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Theory Audit
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {renderRows(data)}
        </tbody>
      </table>
    </div>
  );
};

export { SpecStatus };
