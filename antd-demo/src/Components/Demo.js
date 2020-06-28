import React, { useState, useEffect } from 'react';

import { Form, Input, InputNumber, Button } from 'antd'

import axios from 'axios'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}
const FormPure = ({onFinish}) => {
    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} >
            <Form.Item name={['shell', 'cmd']} label="cmd">
                <Input></Input>
            </Form.Item>
            <Form.Item name={['shell', 'args']} label="args">
                <Input />
            </Form.Item>
            <Form.Item name={['shell', 'pipe']} label="pipe">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8}}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}
const Demo = () => {

    const [submit, setSubmit] = useState(false);
    const onFinish = values => {
        console.log(values);
        setSubmit(true)
    }
    useEffect(() => {
        console.log('submit changes')
    }, []);

    return (
        <React.Fragment>
            {
                !submit ? <FormPure onFinish={onFinish}></FormPure > : <div><p>已经提交</p><Button onClick={() => setSubmit(false)}>回去</Button></div>
            }
        </React.Fragment >
    )
}

export default Demo;
