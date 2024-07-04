import React from 'react';

const SpecLegend = () => {
  const rows = [
    {
      description: "Unlikely to change in the foreseeable future.",
      label: "Stable",
      className: "bg-green-500"
    },
    {
      description: "All content is correct. Important details are covered.",
      label: "Reliable",
      className: "bg-blue-500"
    },
    {
      description: "All content is correct. Details are being worked on.",
      label: "Draft/WIP",
      className: "bg-yellow-500"
    },
    {
      description: "Do not follow. Important things have changed.",
      label: "Incorrect",
      className: "bg-red-500"
    },
    {
      description: "No work has been done yet.",
      label: "Missing",
      className: "bg-gray-500"
    }
  ];

  return (
    <table className="min-w-full divide-y divide-gray-500">
      <thead className="">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Spec state</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Label</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-500">
        {rows.map((row) => (
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">{row.description}</td>
            <td className={`px-6 py-4 whitespace-nowrap text-black ${row.className}`}>{row.label}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { SpecLegend }
