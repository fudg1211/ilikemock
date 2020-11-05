/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import React from 'react';
import BaseController, { Render } from '../../framework/controller';
import './index.less';

@Render
export default class Login extends BaseController {
    constructor (props:any) {
        super(props, '登陆');
    }

    aaaCB (a:any) {
        return 1;
    }

    dd () {
        window.pcb('aaa', 111122221);
    }
    render () {
        return <div onClick={() => this.dd()}>s22df</div>;
    }
}

