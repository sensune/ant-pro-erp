import React, { PureComponent, Fragment } from 'react';
import { Table, Card, Divider, Alert, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

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

      render: () => (
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
  }

  onSelectChange = (selectedRowKeys) => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };



  render() {

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <PageHeaderWrapper>
        <Card>
          <Alert
            message={
              <Fragment>
                已选择
                <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;总共
                <a style={{ fontWeight: 600 }}>
                  {data.length}
                </a>条数据
                
              </Fragment>
            }
            type="info"
            showIcon
          />
          <Table rowSelection={rowSelection} dataSource={data} columns={this.columns} />
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default NewPage;