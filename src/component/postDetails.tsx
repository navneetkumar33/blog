import React from 'react';
import { Form, Input,Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { PostType } from '../types/util';


const { TextArea } = Input;

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const  PostDetails: React.FC = () =>{ 
  const {state}=useLocation();
 

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  }
  return ( 
  <Form
    name="basic"  
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Post Title"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item label="TextArea">
          <TextArea rows={4}  />
    </Form.Item>

        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        </Form.Item>

   
  </Form>
)};

export default PostDetails;