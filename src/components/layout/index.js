import React from 'react';
import { Layout } from 'antd';
import "./layout.less"
const { Header, Content } = Layout;
const AppHeader=()=>{
    return     <div className='AppHeader'>
                    <Header className='AppHeader'>
                    SPIRALYZE</Header>
                </div>
}
const AppLayout=({children})=>
{
    return (
    <div>
        <AppHeader></AppHeader>
        <Content className='AppContent'>
            {children}
        </Content>
    </div>
    );
}
export default AppLayout;