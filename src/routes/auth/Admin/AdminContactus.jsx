import React from 'react';
import Leads from './Leads';

const AdminContactus = () => {
    return (
        // The contacts and leads are merged in the database under 'leads' table
        // so we reuse the Leads component here.
        <Leads />
    );
};

export default AdminContactus;
