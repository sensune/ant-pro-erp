import React, { PureComponent, Fragment } from 'react';
import {
  Alert,
  Button,
  Card,
  Col,
  Table,
  Divider,
  Form,
  Row,
  Select,
  Input,
  Icon
} from 'antd';
import {connect} from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './TableList.less';

const FormItem = Form.Item;
// const { Option } = Select;

// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

@connect(({ newPage, loading }) => ({
  newPage,
  loading: loading.models.newPage,
}))
@Form.create()
class NewPage extends PureComponent {

  columns = [
    {
      title: '工序名称',
      dataIndex: 'name',
      // key: '',
    },
    {
      title: '添加人员',
      dataIndex: 'create_name',
      // key: 'age',
    },
    {
      title: '添加时间',
      dataIndex: 'create_date',
      // key: '1',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      // key: '2',
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
    expandForm: false,
    // formValues: {},
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'newPage/fetch',
    });
  }

  onSelectChange = (selectedRowKeys) => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  handleSelectDel = () => {
    
  };

  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    // this.setState({
    //   formValues: {},
    // });
    // dispatch({
    //   type: 'rule/fetch',
    //   payload: {},
    // });
  };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="工序名称">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              {/* <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a> */}
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  

  renderForm() {
    const { expandForm } = this.state;
    console.log(expandForm);
    return  this.renderSimpleForm();
  }

  render() {
    // console.log(this.props);
    const {
      newPage: { data },
      loading,
    } = this.props;
    console.log(loading);
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    
    return (
      
      <PageHeaderWrapper title="test">
        <Card>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="delete" type="danger" onClick={this.handleSelectDel}>
                删除
              </Button>
            </div>
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
          </div>
        </Card>
      </PageHeaderWrapper>
    )
  }
}

export default NewPage;