import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Leads = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await axios.get('/api/leads');
                setLeads(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch leads", error);
                setLoading(false);
            }
        };
        fetchLeads();
    }, []);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <Helmet>
                <title>Leads Manager | Admin</title>
            </Helmet>

            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Leads & Inquiries</h1>
                <p className="text-gray-600 mt-2">Manage customer contact form submissions</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="p-10 text-center text-gray-500">Loading leads...</div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-gray-700 text-sm">
                                    <th className="p-4 border-b font-medium">Name</th>
                                    <th className="p-4 border-b font-medium">Contact</th>
                                    <th className="p-4 border-b font-medium">Subject</th>
                                    <th className="p-4 border-b font-medium">Message</th>
                                    <th className="p-4 border-b font-medium">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map(lead => (
                                    <tr key={lead.id} className="border-b hover:bg-gray-50">
                                        <td className="p-4 text-gray-800 font-medium">
                                            {lead.name}
                                        </td>
                                        <td className="p-4 text-gray-600 text-sm">
                                            <div>{lead.email}</div>
                                            <div>{lead.phone}</div>
                                        </td>
                                        <td className="p-4 text-gray-800 text-sm">
                                            {lead.subject}
                                        </td>
                                        <td className="p-4 text-gray-600 text-sm max-w-xs truncate" title={lead.message}>
                                            {lead.message}
                                        </td>
                                        <td className="p-4 text-gray-600 text-sm">
                                            {new Date(lead.created_at).toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                                {leads.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="p-10 text-center text-gray-500">No leads found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leads;
