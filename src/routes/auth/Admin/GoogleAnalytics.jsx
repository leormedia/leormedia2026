import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FcStatistics } from 'react-icons/fc';

const GoogleAnalytics = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <Helmet>
                <title>Analytics | Admin</title>
            </Helmet>

            <div className="mb-6">
                <h1 className="font-bold text-gray-800">Google Analytics</h1>
                <p className="text-gray-600 mt-2">Website traffic and performance data</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="bg-green-50 p-6 rounded-full mb-4">
                    <FcStatistics className="text-6xl" />
                </div>
                <h2 className="font-bold text-gray-800 mb-2">Analytics Dashboard Coming Soon</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                    Integration with Google Analytics Data API is required to show live traffic charts here. 
                    Please set up your GA4 property and configure the backend service account to enable this feature.
                </p>
                <a 
                    href="https://analytics.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    Open Google Analytics Console
                </a>
            </div>
        </div>
    );
};

export default GoogleAnalytics;
