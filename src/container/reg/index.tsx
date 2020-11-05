/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import React from 'react';
import { Form, Input, Card, Button } from 'antd';
import 'antd/dist/antd.css';
import BaseController, { Render } from 'src/framework/controller';
import TopBar from 'src/components/layout/top-bar';

import './index.less';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
    }
};

@Render
export default class Login extends BaseController {
    constructor (props:any) {
        super(props, '登陆');
    }

    handleSubmit () {
        window.pcb('aaa', 1111);
    }
    render () {
        return (<>
            <div className="reg">
                <Card title="新用户注册1" style={{ borderBottom: 0 }}>
                    <div className="p-reg">
                        <Form onFinish={this.handleSubmit} className="reg-form">
                            <Form.Item {...formItemLayout} label="昵2称" name="nick" rules={[{ required: true, message: '请输入昵称' }]}>
                                <Input placeholder="方便人员查找" maxLength={16}/>
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="密2码" name="password" rules={[{ required: true, min: 8, message: '请输入正确密码,密度大于8位' }]}>
                                <Input type="password" maxLength={16} placeholder="请输入密码"/>
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="验证密码" name="rePassword" rules={[{ required: true, message: '请再次输入密码' }]}>
                                <Input type="password" placeholder="请再次输入密码"/>
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="手机号码" name="tel" rules={[{ required: true, message: '请输入手机号码' }]}>
                                <Input maxLength={11}/>
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="验证码" name="code" rules={[{ required: true, min: 6, message: '请输入验证码' }]}>
                                <Input placeholder="请输入验证码" maxLength={6} style={{ width: 135 }}/>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    xs: { span: 24, offset: 0 },
                                    sm: { span: 16, offset: 8 }
                                }}
                            >
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>
            </div>
        </>);
    }
}
