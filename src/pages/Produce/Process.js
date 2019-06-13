import React, { PureComponent, Fragment } from 'react';
import { Card, Table, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


const data = [
  {
    name: '齿轮箱',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '321',
    ROW_NUMBER: '1',
  },
  {
    name: '心脏',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '323',
    ROW_NUMBER: '2',
  },
  {
    name: '背架',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '325',
    ROW_NUMBER: '3',
  },
  {
    name: '包装',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '326',
    ROW_NUMBER: '4',
  },
  {
    name: '电控',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '327',
    ROW_NUMBER: '5',
  },
  {
    name: '缝纫线-脚部',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '328',
    ROW_NUMBER: '6',
  },
  {
    name: '缝纫线-座部',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '330',
    ROW_NUMBER: '8',
  },
  {
    name: '靠背',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '331',
    ROW_NUMBER: '9',
  },
  {
    name: '手控器',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '332',
    ROW_NUMBER: '10',
  },
  {
    name: '手控器',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '332',
    ROW_NUMBER: '10',
  },
  {
    name: '手控器',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '332',
    ROW_NUMBER: '10',
  },
  {
    name: '手控器',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '332',
    ROW_NUMBER: '10',
  },
  {
    name: '手控器',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '332',
    ROW_NUMBER: '10',
  },
  {
    name: '手控器',
    create_name: '何妮娜',
    create_date: '16-07-20',
    remark: null,
    id: '332',
    ROW_NUMBER: '10',
  },
];


class Process extends PureComponent {
  columns = [
    {
      title: '工序名称',
      dataIndex: 'name',
      key: '',
    },
    {
      title: '添加人员',
      dataIndex: 'create_name',
      key: 'age',
    },
    {
      title: '添加时间',
      dataIndex: 'create_date',
      key: '1',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: '2',
    },

    {
      title: '操作',
      key: 'operation',

      render: (text, record) => (
        <Fragment>
          <a href="">修改</a>
          <Divider type="vertical" />
          <a href="">删除</a>
        </Fragment>
      ),
    },
  ];

  state = {
    selectedRowKeys: [],
    loading: false,
  };

  start = () => {};

  render() {
    return (
      <PageHeaderWrapper title="工序查询">
        <Card>
          <Table bordered={false} columns={this.columns} dataSource={data} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Process;
