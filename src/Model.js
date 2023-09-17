import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Radio, Space, Divider, Checkbox, message } from 'antd';
import { Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import './App.css';

const { Dragger } = Upload;

const Model = ({ handleForms, initialData }) => {
  const [form] = Form.useForm();
  const [showPage2, setShowPage2] = useState(false);
  const[isfiledLastYear,setFiledLastYear]=useState('Yes');
  const[isIncoporatedIn2022,setIsIncoporatedIn2022]=useState('Yes');
  const[isOwnsershipChanged,setIsOwnershipChanged]=useState('Yes');
  const[total,setTotal]=useState(0);
  const [isEazyTaxesChecked, setIsEazyTaxesChecked] = useState(false);

  useEffect(() => {
    console.log("initalData",initialData)
    form.setFieldsValue(initialData);
  }, [initialData, form]);

  const onFinish = (values) => {
    setShowPage2(false);
    console.log("formValues",values)
    // Call the handleForms function with form values
    handleForms(values);

    // Perform any additional actions, such as sending form values to the server
    message.success('Form submitted successfully');
    console.log("formValues",values)
    // Clear the form fields
    form.resetFields();
    setShowPage2(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const togglePage = () => {
    // Toggle between Page 1 and Page 2
    setShowPage2(!showPage2);
  };
  const handleFiledLastYearChange=(value)=>{
    setFiledLastYear(value)
  }
  const handleScorpIncorporated=(value)=>{
    setIsIncoporatedIn2022(value);
  }

  const handleEazyTaxesChange = (e) => {
    setIsEazyTaxesChecked(e.target.checked);
    if (e.target.checked) {
      setTotal(total + 349);
    } else {
      setTotal(total - 349);
    }
  };

  return (
    <div className='centered-form'>
      <Form
        layout="vertical"
        form={form}
        name="control-hooks"
        style={{
          maxWidth: 800,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
       
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not a valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input placeholder="example@example.com" />
            </Form.Item>

            <Form.Item
              name="filedLastYear"
              label="Did you file returns last year?"
              rules={[
                {
                  required: true,
                  message: 'Please select an option!',
                },
              ]}
            >
              <Radio.Group onChange={(e) => handleFiledLastYearChange(e.target.value)}>
                <Space direction="vertical">
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            { isfiledLastYear==='Yes' && 
            <Form.Item
            name="uploadFile1"
            label="File Upload"
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
            rules={[
              {
                required: true,
                message: 'Please upload a file!',
              },
            ]}
          >
            <Upload.Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
          </Form.Item>
          }
            

            <Form.Item
              name="sCorpIncorporated"
              label="Was the S-corp incorporated in 2022?"
              rules={[
                {
                  required: true,
                  message: 'Please select an option!',
                },
              ]}
            >
              <Radio.Group onChange={(e)=>handleScorpIncorporated(e.target.value)}>
                <Space direction="vertical">
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

              { isIncoporatedIn2022==='Yes' && 
               <Form.Item
               name="uploadFile2"
               label="Please upload the incorporated document"
               valuePropName="fileList"
               getValueFromEvent={(e) => e.fileList}
               rules={[
                 {
                   required: true,
                   message: 'Please upload a file!',
                 },
               ]}
             >
               <Upload.Dragger>
                 <p className="ant-upload-drag-icon">
                   <InboxOutlined />
                 </p>
                 <p className="ant-upload-text">Click or drag file to this area to upload</p>
                 <p className="ant-upload-hint">Support for a single or bulk upload.</p>
               </Upload.Dragger>
             </Form.Item>
 
              }
           
            <Form.Item
              name="ownershipChange"
              label="Was there any change in Ownership Structure in 2022?"
              rules={[
                {
                  required: true,
                  message: 'Please select an option!',
                },
              ]}
            >
              <Radio.Group onChange={(e)=>setIsOwnershipChanged(e.target.value)}>
                <Space direction="vertical">
                  <Radio value="Yes">Yes</Radio>
                  <Radio value="No">No</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
              { isOwnsershipChanged==='Yes' && 
              <Form.Item
              name="uploadFile3"
              label="Upload latest shareholding document"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[
                {
                  required: true,
                  message: 'Please upload a file!',
                },
              ]}
            >
              <Upload.Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>
}
            
            <Divider orientation="left" plain></Divider>
       
            <Form.Item
              name="transactionsIn2022"
              label="Was there any following transaction in 2022?"
            >
              <Checkbox.Group>
                <Space direction="vertical">
                  <Checkbox value="Capital Infusion">Capital Infusion</Checkbox>
                  <Checkbox value="Capital Withdrawal">Capital Withdrawal</Checkbox>
                  <Checkbox value="Related Party Transaction">Related Party Transaction</Checkbox>
                </Space>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              name="uploadFile4"
              label="Upload documents for the same:"
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[
                {
                  required: false,
                  message: 'Please upload a file!',
                },
              ]}
            >
              <Upload.Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>

            <Form.Item
              name="documentsToUpload"
              label="Please upload the following documents"
              rules={[
                {
                  required: true,
                  message: 'Please select at least one document!',
                },
              ]}
            >
              <Checkbox.Group>
                <Space direction="vertical">
                  <Checkbox value="Bank Statements">Bank Statements</Checkbox>
                  <Checkbox value="Credit card statements">Credit card statements</Checkbox>
                  <Checkbox value="Form 10991">Form 10991</Checkbox>
                </Space>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              name="uploadFile5"
              label=""
              valuePropName="fileList"
              getValueFromEvent={(e) => e.fileList}
              rules={[
                {
                  required: true,
                  message: 'Please upload a file!',
                },
              ]}
            >
              <Upload.Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            </Form.Item>

            <h4>
              <strong>Please complete the payment. We will prepare the draft tax return within 48 hours!</strong>
            </h4>

            <Form.Item>
              <div className='total-class'>
                <Checkbox onChange={handleEazyTaxesChange}><strong>EazyTaxes</strong></Checkbox>
                <strong>$349.00</strong>
              </div>
            </Form.Item>

            <Divider></Divider>

            <Form.Item
              name="Coupon"
              label="Enter Coupon"
            >
              <div className='coupon-container'>
                <div className='coupon-input-box'>
                  <Input placeholder='Enter Coupon Code'></Input>
                  <Button type='primary'>Apply</Button>
                </div>
                <div>
                  <strong>Total     ${total}</strong>
                </div>
              </div>
            </Form.Item>

            <Divider></Divider>
            <div className='buttons-list'>
              <div>
                <Button type='primary' style={{ backgroundColor: 'green', borderColor: 'green' }}>
                  Back
                </Button>
              </div>
              <div>
                <Button type='primary' htmlType="submit" style={{ backgroundColor: 'green', borderColor: 'green' }}>
                  Submit
                </Button>
              </div>
            </div>
          

      </Form>
    </div>
  );
};

export default Model;

