import React from 'react';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const RoleAccess = ({allowedRoles,children})=>{
const {role} = useSelector((state)=>state.user);

if(!allowedRoles.includes(role)){
    return <Navigate to="/unauthorized"/>;
}

return children;
};

export default RoleAccess;
