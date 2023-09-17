import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Model from './Model';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null);
  const [formList, setFormList] = useState([]);

  const showModal = (formData) => {
    setIsModalOpen(true);
    setEditFormData(formData);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setEditFormData(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEditFormData(null);
  };

  const handleForms = (value) => {
    if (editFormData) {
      // Edit mode: Replace the edited form data in the list
      const updatedList = formList.map((item) =>
        item === editFormData ? value : item
      );
      setFormList(updatedList);
      setEditFormData(null);
    } else {
      // Add new form data to the list
      setFormList([...formList, value]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Button type="primary" onClick={() => showModal(null)}>
        Submit a New Form
      </Button>
      {formList.map((formData, index) => (
        <div key={index}>
          <div>
            <strong>Form {index + 1}</strong>
          </div>
          <Button type="primary" onClick={() => showModal(formData)}>
            Edit Form
          </Button>
        </div>
      ))}
      <Modal
        title={editFormData ? 'Edit Form' : 'Submit a New Form'}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        bodyStyle={{
          overflowY: 'auto',
        }}
      >
        <Model handleForms={handleForms} initialData={editFormData} />
      </Modal>
    </div>
  );
};

export default App;























// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import Model from './Model';
// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   const [formList,setFormList]=useState([]);

//   const handleForms=(value)=>{
//     let list = [...formList];
//     list.push(value);
//     setFormList(list);
//   }
//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
//        bodyStyle={{
//         overflowY: 'auto',
//       }}>
//         <Model handleForms={handleForms}/>
//       </Modal>
//     </>
//   );
// };
// export default App;



















// import React, { useState } from 'react';
// import { Button, Form, Input, Select, Radio, Space, Divider,Checkbox } from 'antd';
// import { Upload } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { InboxOutlined } from '@ant-design/icons';
// import "./App.css"
// const { Dragger } = Upload;

// const { Option } = Select;



// const App = () => {
//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
//   const[showPage2,setShowPage2]=useState(false);

//   return (
//     <div className='centered-form'>

//    <Form
//    layout="vertical"
//    form={form}
//    name="control-hooks"
//    style={{
//      maxWidth: 800,
//    }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}>
//       { !showPage2 &&
//       <div>
//       <Form.Item
//         name="Email"
//         label="Email"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input placeholder="example@example.com"/>
//       </Form.Item>
//       <Form.Item name="lastyear" label="Did you file returns last year?">
//       <Radio.Group>
//       <Space direction="vertical">
//         <Radio value={1}>Option A</Radio>
//         <Radio value={2}>Option B</Radio>
//       </Space>
//     </Radio.Group>
//       </Form.Item>

//       <Form.Item
//         name="File Upload"
//         label="File Upload"
//         rules={[
//           {
//             required: true,
//             message: 'Please upload the file',
//           },
//         ]}
//       >
//          <Dragger>
//     <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p>
//     <div>Browse</div>
//     <div> Drag and drop files here</div>
   
//   </Dragger>
//       </Form.Item>

//       <Form.Item name="Was the S-corp incorporated in 2022?" label="Was the S-corp incorporated in 2022?">
//       <Radio.Group>
//       <Space direction="vertical">
//         <Radio value={1}>Option A</Radio>
//         <Radio value={2}>Option B</Radio>
//       </Space>
//     </Radio.Group>
//       </Form.Item>

//       <Form.Item
//         name="File Upload"
//         label="Please upload the incoporated document"
//         rules={[
//           {
//             required: true,
//             message: 'Please upload the incoporated document',
//           },
//         ]}
//       >
//          <Dragger>
//     <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p>
//     <div>Browse</div>
//     <div> Drag and drop files here</div>
   
//   </Dragger>
//       </Form.Item>

//       <Form.Item name="Was the S-corp incorporated in 2022?" label="Was there any change in Ownership Structure in 2022?">
//       <Radio.Group>
//       <Space direction="vertical">
//         <Radio value={1}>Option A</Radio>
//         <Radio value={2}>Option B</Radio>
//       </Space>
//     </Radio.Group>
//       </Form.Item>

//       <Form.Item
//         name="File Upload"
//         label="Upload latest shareholding document"
//         rules={[
//           {
//             required: true,
//             message: 'Please upload the incoporated document',
//           },
//         ]}
//       >
//          <Dragger>
//     <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p>
//     <div>Browse</div>
//     <div> Drag and drop files here</div>
   
//     </Dragger>
//       </Form.Item>

//       <Divider orientation="left" plain></Divider>
//       <div className='buttons'>
//           <Button type="primary">
//             Save
//           </Button>
//           <Button type="primary" onClick={()=>setShowPage2(true)}>
//             Next
//           </Button>

//       </div></div>}
//       { showPage2 &&
//       <div>
//         <Form.Item name="lastyear" label="Was there any following transaction in 2022?">
//         <Space direction="vertical">
//             <Checkbox>Capital Infusion</Checkbox>
//             <Checkbox>Capital Withdrawal</Checkbox>
//             <Checkbox>Related Party Transaction</Checkbox>
//           </Space>
       
//         </Form.Item>

//         <Form.Item
//         name="File Upload"
//         label="Upload documents for the same:"
//       >
//          <Dragger>
//     <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p>
//     <div>Browse</div>
//     <div> Drag and drop files here</div>
   
//     </Dragger>
//       </Form.Item>
//       <Form.Item name="lastyear" label="Please upload the following documents">
//         <Space direction="vertical">
//             <Checkbox>Bank Statements</Checkbox>
//             <Checkbox>Credit card statements</Checkbox>
//             <Checkbox>Form 10991</Checkbox>
//           </Space>
//         </Form.Item>
        
//         <Form.Item
//         name="File Upload"
//         label=""
//         rules={[
//           {
//             required: true,
//             message: 'Please upload the documents',
//           },
//         ]}
//       >
//          <Dragger>
//     <p className="ant-upload-drag-icon">
//       <InboxOutlined />
//     </p>
//     <div>Browse</div>
//     <div> Drag and drop files here</div>
   
//     </Dragger>
//       </Form.Item> 
//       <h4><strong>Please complete the payment. We will prepare the draft tax return within 48 hours!</strong></h4>

//       <Form.Item>
//         <div className='total-class'>
//       <Checkbox><strong>EazyTaxes</strong></Checkbox>
//       <strong>$349.00</strong>
//       </div>
//         </Form.Item>  
//         <Divider>
//         </Divider>

//        <Form.Item
//         name="Coupon"
//         label="Enter Coupon">
//           <div className='coupon-container'>
//             <div className='coupon-input-box'>
//             <Input placeholder='Enter Coupon Code'>
//               </Input>
//               <Button type='primary'>Apply</Button>
//           </div>
//           <div>
//             <strong>Total     $0.00</strong>
           
//           </div>
//           </div>
//         </Form.Item>
//         <Divider></Divider> 
//         <div className='buttons-list'>
//           <div>
//             <Button type='primary' onClick={()=>setShowPage2(false)}>Back</Button>
//           </div>
//           <div>
//             <Button type='primary'>Save</Button>
//             <Button type="primary" htmlType="submit">Submit</Button>
//           </div>
//         </div>

//       </div>
//       }


//    </Form>
//    </div>
//   );
// };
// export default App;