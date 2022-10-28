import styles from './layout.less'
import { Link } from "react-router-dom";
import React from 'react';
import { Layout,Menu,Row,Col, Typography } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,MenuOutlined } from '@ant-design/icons';
import "./layout.less"
import Item from 'antd/lib/list/Item';
const { Header, Content } = Layout;
const AppHeader=()=>{

    return  <div>
                <div className='nav-wrapper'>
                    <div className='menu-section'>
                        <div className='header-logo'>
                            <img width="100%" src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" alt="img" />
                        </div>
                        <ul>
                            <li>
                                 <Link to={"#"}> Sale</Link>
                                </li>
                             <li>
                                <Link to={ "#"}> Inventory</Link>
                             </li>
                            
                        </ul>
                    </div>
                    <div className='auth-section'>
                        <span>SignOut</span>
                    </div>
                    </div>
               
            </div>
}
const NavItem = ({ icon, text, href, active, ...rest }) => {
    return (
     
        <div
          {...rest}
          className={'nav_item'}
        >
          <span className={'text'}> <Link to={href || "#"}> {text}</Link></span>
        </div>
     
    );
  };
const items=[
    {
    title:'Sale',
    href:'/sale',
    icon:''
    },
    {
    title:'Inventory',
    href:'/sale',
    icon:''
    },
    {
    title:'History',
    href:'/sale',
    icon:''
    }
]

/* const SideBar=()=>{
    return (
            <div className={'menu'}>
                <div className='brand'>TenSolutions</div>
                {
                    items.map((m)=>(
                        <NavItem
                            key={m.title}
                            text={m.title}
                            href={m.href}
                            active={true}
                            icon={m.icon}
                        />
                    ))
                }
             </div>

    );
    
}
 */
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