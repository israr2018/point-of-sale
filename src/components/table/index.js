import React from 'react';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;
const CustomTable=({columns,dataSource})=>(
    <Table columns={columns} dataSource={dataSource}></Table>
);
export default CustomTable;