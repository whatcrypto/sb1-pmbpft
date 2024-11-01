import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface SectorData {
  rank: number;
  name: string;
  projects: number;
  marketCap: string;
  volume24h: string;
  change1h: string;
  change24h: string;
  change7d: string;
}

const sectorData: SectorData[] = [
  {
    rank: 1,
    name: "Payments",
    projects: 327,
    marketCap: "$1.6T",
    volume24h: "$116.6B",
    change1h: "0.17%",
    change24h: "-0.33%",
    change7d: "4.49%"
  },
  {
    rank: 2,
    name: "Meme Tokens",
    projects: 405,
    marketCap: "$50.1B",
    volume24h: "$3.4B",
    change1h: "0.64%",
    change24h: "1.07%",
    change7d: "0.37%"
  },
  {
    rank: 3,
    name: "Charity",
    projects: 44,
    marketCap: "$25.1B",
    volume24h: "$2.7B",
    change1h: "0.27%",
    change24h: "-0.48%",
    change7d: "0.57%"
  },
  {
    rank: 4,
    name: "Governance",
    projects: 157,
    marketCap: "$15.4B",
    volume24h: "$2.2B",
    change1h: "1.02%",
    change24h: "-0.17%",
    change7d: "-0.35%"
  },
  {
    rank: 5,
    name: "Metaverse",
    projects: 229,
    marketCap: "$12.8B",
    volume24h: "$1.5B",
    change1h: "0.17%",
    change24h: "-0.25%",
    change7d: "0.98%"
  }
];

export function SectorTable() {
  const getChangeIcon = (change: string) => {
    const value = parseFloat(change);
    if (value > 0) return <ArrowUpRight className="w-4 h-4 text-emerald-600" />;
    if (value < 0) return <ArrowDownRight className="w-4 h-4 text-red-600" />;
    return <Minus className="w-4 h-4 text-gray-600" />;
  };

  const getChangeColor = (change: string) => {
    const value = parseFloat(change);
    if (value > 0) return 'text-emerald-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sector
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Projects
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Market Cap
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Volume (24h)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                1h %
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                24h %
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                7d %
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sectorData.map((sector) => (
              <tr key={sector.rank} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {sector.rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {sector.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {sector.projects}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sector.marketCap}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {sector.volume24h}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getChangeIcon(sector.change1h)}
                    <span className={`ml-1 text-sm ${getChangeColor(sector.change1h)}`}>
                      {sector.change1h}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getChangeIcon(sector.change24h)}
                    <span className={`ml-1 text-sm ${getChangeColor(sector.change24h)}`}>
                      {sector.change24h}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getChangeIcon(sector.change7d)}
                    <span className={`ml-1 text-sm ${getChangeColor(sector.change7d)}`}>
                      {sector.change7d}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}