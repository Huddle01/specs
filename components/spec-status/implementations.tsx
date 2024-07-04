import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is included

type TRowData = {
  repo: string;
  link: string;
  language: string;
  ci: TCiStatus;
  // testCoverage: string;
  securityAudit: TSecurityAuditStatus;
  securityAuditURL: string;
};

type TCiStatus = 'Passed' | 'Failed';
type TSecurityAuditStatus = 'Reports' | 'Missing';

const CiStatusToBgColor = {
  Passed: 'bg-green-500',
  Failed: 'bg-red-500',
};

const SecurityAuditStatusToBgColor = {
  Reports: 'bg-blue-500',
  Missing: 'bg-gray-500',
};

const data: TRowData[] = [
  {
    repo: 'momo',
    link: 'https://github.com/huddle01/shinigami',
    language: 'C++ , Typescript',
    ci: 'Passed',
    // testCoverage: '40%',
    securityAudit: 'Missing',
    securityAuditURL: '#',
  },
  {
    repo: 'registry',
    link: 'https://github.com/huddle01/shinigami',
    language: 'Go',
    ci: 'Passed',
    // testCoverage: '58%',
    securityAudit: 'Missing',
    securityAuditURL: '#',
  },
  {
    repo: 'sushi',
    link: 'https://github.com/huddle01/shinigami',
    language: 'C++ , Typescript',
    ci: 'Passed',
    // testCoverage: '69%',
    securityAudit: 'Missing',
    securityAuditURL: '#',
  },
];

const Implementations = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
              Repo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
              Language
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
              CI
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
              Test Coverage
            </th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-white-500 uppercase tracking-wider">
              Security Audit
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className="border-t-[1px] border-gray-500">
              <td className="px-6 py-4 whitespace-nowrap text-blue-500">
                <a href={row.link}>{row.repo}</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row.language}</td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-black ${CiStatusToBgColor[row.ci]}`}
              >
                {row.ci}
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap">{row.testCoverage}</td> */}
              <td
                className={`px-6 py-4 whitespace-nowrap text-black ${SecurityAuditStatusToBgColor[row.securityAudit]}`}
              >
                {row.securityAudit === 'Reports' ? (
                  <a href={row.securityAuditURL} className="text-blue-500">
                    <svg className="inline-block w-4 h-4 mr-1">
                      <use xlinkHref="/symbol-defs.svg#icon-shield" />
                    </svg>
                    Reports
                  </a>
                ) : (
                  row.securityAudit
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Implementations };
