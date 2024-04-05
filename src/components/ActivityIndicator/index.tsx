import React from 'react';
import { Spinner } from '../GlobalStyles';

const ActivityIndicator: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Spinner />
        </div>
    );
};

export default ActivityIndicator;
