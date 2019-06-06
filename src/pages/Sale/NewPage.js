import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


class NewPage extends PureComponent {

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


  render() {
    return (
      <PageHeaderWrapper title="">
        <Card>
          <Table columns={this.columns} />
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default NewPage;