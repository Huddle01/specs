import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is included

const data = [
  {
    repo: 'momo',
    link: 'https://github.com/huddle01/shinigami',
    language: 'C++ , Typescript',
    ci: 'Passed',
    ciClass: 'bg-green-500',
    // testCoverage: '40%',
    securityAudit: 'Missing',
    securityAuditURL: '#',
    securityAuditClass: 'bg-gray-500',
  },
  {
    repo: 'registry',
    link: 'https://github.com/huddle01/shinigami',
    language: 'Go',
    ci: 'Passed',
    ciClass: 'bg-green-500',
    // testCoverage: '58%',
    securityAudit: 'Missing',
    securityAuditURL: '#',
    securityAuditClass: 'bg-gray-500',
  },
  {
    repo: 'sushi',
    link: 'https://github.com/huddle01/shinigami',
    language: 'C++ , Typescript',
    ci: 'Passed',
    ciClass: 'bg-green-500',
    // testCoverage: '69%',
    securityAudit: 'Missing',
    securityAuditURL: '#',
    securityAuditClass: 'bg-gray-500',
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
                className={`px-6 py-4 whitespace-nowrap text-black ${row.ciClass}`}
              >
                {row.ci}
              </td>
              {/* <td className="px-6 py-4 whitespace-nowrap">{row.testCoverage}</td> */}
              <td
                className={`px-6 py-4 whitespace-nowrap text-black ${row.securityAuditClass}`}
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
