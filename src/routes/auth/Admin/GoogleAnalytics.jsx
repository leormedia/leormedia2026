import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import {
  FiMonitor,
  FiRefreshCw,
  FiTrendingUp,
  FiTrendingDown,
  FiSmartphone,
  FiAlertCircle
} from "react-icons/fi";

export default function GoogleAnalytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState("30days");
  const [demographicsView, setDemographicsView] = useState("countries");

  const fetchData = () => {
    setLoading(true);
    axios.get('/api/ga/dashboard')
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);

  const getDailyTasks = useMemo(() => {
    if (!data) return [];
    const kpiRow = data.kpi?.rows?.[0]?.metricValues ?? [];
    const tasks = [];
    
    const highBouncePages = data.topPages?.rows?.filter(r => {
      const bounce = parseFloat(r.metricValues?.[2]?.value ?? 0);
      return bounce > 70;
    }).slice(0, 2);
    
    highBouncePages?.forEach(p => {
      const path = p.dimensionValues?.[0]?.value ?? 'unknown';
      const title = p.dimensionValues?.[1]?.value ?? 'Page';
      const bounce = Math.round(parseFloat(p.metricValues?.[2]?.value ?? 0));
      tasks.push({
        id: `bounce-${path}`,
        title: "High Bounce Rate Alert",
        desc: `Page "${title}" has ${bounce}% bounce.`
      });
    });

    const quickExitPages = data.topPages?.rows?.filter(r => {
      const duration = parseInt(r.metricValues?.[1]?.value ?? 999);
      return duration < 30;
    }).slice(0, 1);
    
    quickExitPages?.forEach(p => {
      const path = p.dimensionValues?.[0]?.value ?? 'unknown';
      const title = p.dimensionValues?.[1]?.value ?? 'Page';
      tasks.push({
        id: `duration-${path}`,
        title: "Low Engagement Warning",
        desc: `Users spend <30s on ${title}.`
      });
    });

    return tasks.length > 0 ? tasks : [{
      id: "all-clear",
      title: "All Systems Optimized",
      desc: "Great job! Your top metrics are stable."
    }];
  }, [data]);

  if (loading && !data) return <LoadingScreen />;
  if (!data || data.error) return <ErrorScreen onRetry={fetchData} error={data?.error} />;

  const formatNumber = (num) => parseInt(num || 0).toLocaleString();
  const formatPercentage = (value) => `${parseFloat(value || 0).toFixed(1)}%`;
  const formatDuration = (seconds) => {
    if (!seconds) return "0s";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const kpiRow = data.kpi?.rows?.[0]?.metricValues ?? [];
  const kpis = {
    activeUsers: kpiRow[0]?.value ?? 0,
    newUsers: kpiRow[1]?.value ?? 0,
    sessions: kpiRow[2]?.value ?? 0,
    engagedSessions: kpiRow[3]?.value ?? 0,
    avgSessionDuration: kpiRow[4]?.value ?? 0,
    pageViews: kpiRow[5]?.value ?? 0,
    bounceRate: kpiRow[6]?.value ?? 0,
    engagementRate: kpiRow[7]?.value ?? 0,
    conversions: kpiRow[9]?.value ?? 0
  };

  const calculateTrend = (metricIndex) => {
    const current = parseInt(data.usersComparison?.rows?.[0]?.metricValues?.[metricIndex]?.value || 0);
    const previous = parseInt(data.usersComparison?.rows?.[1]?.metricValues?.[metricIndex]?.value || 0);
    const diff = previous ? ((current - previous) / previous) * 100 : 0;
    return {
      value: Math.abs(diff).toFixed(1) + "%",
      isPositive: diff >= 0
    };
  };

  const seoKeywords = (data.searchKeywords?.rows || data.searchQueries?.rows || []).map(row => ({
    keyword: row.dimensionValues?.[0]?.value || 'Unknown',
    clicks: parseInt(row.metricValues?.[0]?.value || 0),
    impressions: parseInt(row.metricValues?.[1]?.value || 0),
    ctr: (parseFloat(row.metricValues?.[2]?.value || 0) * 100).toFixed(2),
    position: parseFloat(row.metricValues?.[3]?.value || 0).toFixed(1)
  }));

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 p-4 font-sans text-[14px]">

      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div>
            <h1 className="text-[20px] font-normal text-gray-900 tracking-tight">Reports snapshot</h1>
          </div>
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="flex bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
              {['7d', '28d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-3 py-1.5 text-[12px] font-medium border-r border-gray-200 last:border-0 hover:bg-gray-50 ${
                    dateRange.includes(range) 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600'
                  }`}
                >
                  Last {range.toUpperCase()}
                </button>
              ))}
            </div>

            <button 
              onClick={fetchData}
              disabled={loading}
              className="flex items-center gap-2 px-3 py-1.5 bg-white text-gray-600 rounded-md border border-gray-300 hover:bg-gray-50 shadow-sm disabled:opacity-50 text-[12px] font-medium"
            >
              <FiRefreshCw className={`${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </header>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard 
            title="Users" 
            value={formatNumber(kpis.activeUsers)} 
            trend={calculateTrend(0)}
            chartData={data.users28days?.rows?.map(r => parseInt(r.metricValues?.[0]?.value ?? 0))}
          />
          <MetricCard 
            title="Sessions" 
            value={formatNumber(kpis.sessions)} 
            trend={calculateTrend(1)}
            chartData={data.users28days?.rows?.map(r => parseInt(r.metricValues?.[2]?.value ?? 0))}
          />
          <MetricCard 
            title="Views" 
            value={formatNumber(kpis.pageViews)} 
            trend={calculateTrend(2)}
            chartData={data.users28days?.rows?.slice(-10).map(r => parseInt(r.metricValues?.[0]?.value ?? 0) * 1.5)}
          />
          <MetricCard 
            title="Average engagement time" 
            value={formatDuration(kpis.avgSessionDuration)} 
            trend={calculateTrend(1)}
            chartData={data.users28days?.rows?.map(r => parseInt(r.metricValues?.[2]?.value ?? 0))}
          />
        </div>

        {/* Real-time & Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h2 className="text-[16px] font-normal text-gray-800 mb-6">Users over time</h2>
            <div className="h-[250px] w-full">
              <MainChart data={data.users28days?.rows} />
            </div>
          </div>

          {/* Real-time Snapshot */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm flex flex-col">
            <h2 className="text-[16px] font-normal text-gray-800 mb-2">Users in last 30 minutes</h2>
            <div className="text-[36px] font-normal text-gray-900 mb-6">
              {data.realtimeOverview?.rows?.[0]?.metricValues?.[0]?.value || 0}
            </div>
            <div className="text-[12px] font-medium text-gray-500 uppercase tracking-wider mb-2 border-b border-gray-100 pb-2">Top pages</div>
            <div className="space-y-3 mt-2 flex-1">
              {data.realtime?.rows?.slice(0, 5).map((row, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-[14px] text-gray-700 truncate pr-4">{row.dimensionValues?.[0]?.value ?? 'Unknown'}</span>
                  <span className="text-[14px] font-medium text-gray-900">{row.metricValues?.[0]?.value ?? 0}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Insights Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Landing Pages */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-[16px] font-normal text-gray-800">Views by Page path and screen class</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                  <tr>
                    <th className="px-4 py-2 font-medium">Page path</th>
                    <th className="px-4 py-2 font-medium text-right">Views</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.topPages?.rows?.slice(0, 7).map((row, i) => {
                    const pagePath = row.dimensionValues?.[0]?.value ?? '';
                    const views = row.metricValues?.[0]?.value ?? 0;
                    return (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-2 text-gray-700 truncate max-w-[200px]">
                          <a href={`https://leormedia.com${pagePath}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                            {pagePath || '/'}
                          </a>
                        </td>
                        <td className="px-4 py-2 text-right text-gray-900">{formatNumber(views)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-[16px] font-normal text-gray-800">Sessions by Session default channel group</h2>
            </div>
            <div className="p-5 flex-1">
              <div className="space-y-4">
                {data.traffic?.rows?.slice(0, 5).map((row, i) => {
                  const count = parseInt(row.metricValues?.[0]?.value ?? 0);
                  const channel = row.dimensionValues?.[0]?.value ?? 'Direct';
                  const percentage = (count / Math.max(kpis.sessions, 1)) * 100;
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-[14px] mb-1">
                        <span className="text-gray-700">{channel.replace(/\(none\)/g, 'Direct')}</span>
                        <span className="font-medium text-gray-900">{formatNumber(count)}</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${Math.min(100, Math.max(1, percentage))}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* SEO Search Keywords Performance */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-[16px] font-normal text-gray-800">Organic Google Search queries / Landing pages</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px] border-collapse min-w-[600px]">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500">
                <tr>
                  <th className="px-4 py-2 font-medium">Landing Page / Query</th>
                  <th className="px-4 py-2 font-medium text-right">Organic Search clicks</th>
                  <th className="px-4 py-2 font-medium text-right">Impressions</th>
                  <th className="px-4 py-2 font-medium text-right">CTR</th>
                  <th className="px-4 py-2 font-medium text-right">Avg. position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {seoKeywords.length > 0 ? (
                  seoKeywords.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-gray-700 max-w-[250px] truncate">{item.keyword}</td>
                      <td className="px-4 py-2 text-right text-gray-900">{formatNumber(item.clicks)}</td>
                      <td className="px-4 py-2 text-right text-gray-700">{formatNumber(item.impressions)}</td>
                      <td className="px-4 py-2 text-right text-gray-700">{item.ctr}%</td>
                      <td className="px-4 py-2 text-right text-gray-700">{item.position}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-6 text-center text-gray-500 text-[14px]">
                      No search console data available. Ensure Search Console is linked.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Locations & Devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
               <h2 className="text-[16px] font-normal text-gray-800">Users by Country</h2>
               <div className="flex border border-gray-300 rounded overflow-hidden">
                  <button onClick={() => setDemographicsView('countries')} className={`px-2 py-1 text-[12px] ${demographicsView === 'countries' ? 'bg-gray-100 font-medium' : 'bg-white text-gray-500'}`}>Country</button>
                  <button onClick={() => setDemographicsView('cities')} className={`px-2 py-1 text-[12px] border-l border-gray-300 ${demographicsView === 'cities' ? 'bg-gray-100 font-medium' : 'bg-white text-gray-500'}`}>City</button>
               </div>
            </div>
            <div className="p-4 overflow-y-auto max-h-[250px]">
              <table className="w-full text-[14px]">
                <tbody className="divide-y divide-gray-50">
                  {(demographicsView === 'countries' ? data.topCountries : data.topCities)?.rows?.slice(0, 10).map((row, i) => {
                    const name = row.dimensionValues?.[0]?.value ?? 'Unknown';
                    const count = row.metricValues?.[0]?.value ?? 0;
                    return (
                      <tr key={i}>
                        <td className="py-2 text-gray-700 flex items-center gap-2">
                          {demographicsView === 'countries' && <span className="text-[16px]">{getCountryFlag(name)}</span>}
                          {name}
                        </td>
                        <td className="py-2 text-right text-gray-900">{formatNumber(count)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200">
               <h2 className="text-[16px] font-normal text-gray-800">Users by Device category</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center gap-4">
              {data.devices?.rows?.map((row, i) => {
                const category = row.dimensionValues?.[0]?.value ?? 'desktop';
                const users = parseInt(row.metricValues?.[0]?.value ?? 0);
                const total = data.devices?.rows?.reduce((acc, r) => acc + parseInt(r.metricValues?.[0]?.value ?? 0), 0) ?? 1;
                const perc = (users / Math.max(total, 1)) * 100;
                
                return (
                  <div key={i} className="flex items-center gap-4">
                     <div className="text-gray-400 w-6 flex justify-center">
                        {category === 'mobile' ? <FiSmartphone className="text-[18px]" /> : (category === 'tablet' ? <FiMonitor className="text-[18px]" /> : <FiMonitor className="text-[18px]" />)}
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between text-[14px] mb-1">
                           <span className="capitalize text-gray-700">{category}</span>
                           <span className="font-medium text-gray-900">{Math.round(perc)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                           <div className="h-full bg-[#1a73e8]" style={{ width: `${perc}%` }} />
                        </div>
                     </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Sub-components

function MetricCard({ title, value, trend, chartData }) {
  const isPositive = trend?.isPositive;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow transition-shadow flex flex-col justify-between h-32">
      <div>
        <h3 className="text-[14px] font-medium text-gray-600 mb-1">{title}</h3>
        <div className="text-[24px] font-normal text-gray-900">{value}</div>
      </div>
      <div className="flex justify-between items-end">
         <div className={`flex items-center gap-1 text-[12px] font-medium ${isPositive ? 'text-green-700' : 'text-red-700'}`}>
            {isPositive ? <FiTrendingUp /> : <FiTrendingDown />}
            {trend?.value}
         </div>
         <div className="h-8 w-16 opacity-70">
          <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
            <path
              d={generatePath(chartData || [10, 20, 15, 25, 20, 30, 25, 40])}
              fill="none"
              stroke="#1a73e8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MainChart({ data }) {
  if (!data || data.length === 0) return <div className="h-full flex items-center justify-center text-gray-400 text-[14px]">No data available</div>;

  const points = data.map(r => parseInt(r.metricValues?.[0]?.value ?? 0));
  const max = Math.max(...points, 1) * 1.2;
  
  const generateChartPath = (vals) => {
    if (vals.length < 2) return "0,100 L 100,100";
    const step = 100 / (vals.length - 1);
    return vals.map((v, i) => `${i * step},${100 - (v / max) * 100}`).join(" L ");
  };

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="grad-users" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a73e8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#1a73e8" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Grid Lines */}
      {[0, 25, 50, 75, 100].map(y => (
        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#f1f3f4" strokeWidth="0.5" />
      ))}

      {/* User Area */}
      <path
        d={`M 0,100 L ${generateChartPath(points)} L 100,100 Z`}
        fill="url(#grad-users)"
      />
      <path
        d={`M ${generateChartPath(points)}`}
        fill="none"
        stroke="#1a73e8"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function generatePath(data) {
  if (!data || data.length < 2) return "";
  const max = Math.max(...data, 1);
  const step = 100 / (data.length - 1);
  return "M " + data.map((v, i) => `${i * step},${40 - (v / max) * 40}`).join(" L ");
}

function getCountryFlag(country) {
  const flags = {
    'United States': '🇺🇸', 'India': '🇮🇳', 'United Kingdom': '🇬🇧', 'Canada': '🇨🇦',
    'Australia': '🇦🇺', 'Germany': '🇩🇪', 'France': '🇫🇷', 'Japan': '🇯🇵',
    'Brazil': '🇧🇷', 'Netherlands': '🇳🇱', 'Spain': '🇪🇸', 'Italy': '🇮🇹'
  };
  return flags[country] || '🌐';
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}

function ErrorScreen({ onRetry, error }) {
  const errorMessage = typeof error === 'object' ? (error?.message || JSON.stringify(error)) : error;

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-6 text-center">
      <div className="max-w-md bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
        <FiAlertCircle className="text-red-500 text-[30px] mx-auto mb-4" />
        <h2 className="text-[18px] font-medium text-gray-900 mb-2">Failed to load reports</h2>
        <p className="text-gray-500 text-[14px] mb-6">{errorMessage || "Could not fetch data from Google Analytics."}</p>
        <button 
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-[14px] font-medium transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
