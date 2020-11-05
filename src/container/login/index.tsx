/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import React from 'react';
import BaseController, { Render } from 'src/framework/controller';


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
                dsf1213331
            </div>
        </>);
    }
}
