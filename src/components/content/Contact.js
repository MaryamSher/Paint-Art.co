import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;

const Contact = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <div id='contact' className='titleHolder'>
                <h2>Get In Touch</h2>
                <p>we are always here for you</p>
            </div>

            <Form
                name="normal_login"
                className="contact-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="fullname"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your fullname!',
                        },
                    ]}
                >
                    <Input  placeholder="Full Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your valid E-mail!',
                        },
                    ]}
                >
                    <Input
                        
                        placeholder="E-mail Address"
                    />
                </Form.Item>
                <Form.Item
                    name="contact no"
                   
                >
                    <Input
                        
                        placeholder="Contact no."
                    />
                </Form.Item>
                <Form.Item
                    name="subject"
                    
                >
                    <Input

                        placeholder="Subject"
                    />
                </Form.Item>

                <Form.Item
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Message is required!',
                        },
                    ]}
                >
                    <TextArea
                        rows={5}
                        placeholder="Message"
                    />
                </Form.Item>

                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    
                >
                    <Checkbox>
                        I agree with terms and conditions.
                    </Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                    </Button>

                </Form.Item>
            </Form>





        </>
    )
}

export default Contact
