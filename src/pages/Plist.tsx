import React, { useState } from 'react';
    import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons/'; 
import { Input, Button, Tooltip, Space, Modal } from 'antd';



export const Plist = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };




  return (
    <>
    <Input className='test1' size="large" placeholder="Search" prefix={<SearchOutlined />} />
    <br/>
    <Button type="primary" onClick={showModal} icon={<PlusCircleOutlined />}>
        Add New Patient
      </Button>
      <Modal className='pbtn' title="Add Patient" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input className='one' placeholder="First Name" />
        <Input className='two'  placeholder="Last Name" />
        <Input className='three'  placeholder="Email" />
        <Input placeholder="Enter Phone Number" />
      </Modal>

    
    </>
    


  );

};