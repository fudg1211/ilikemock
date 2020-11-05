/*
 * @Author: huajian
 * @LastEditors: huajian
 */
// @ts-nocheck
import React from 'react';
import render from './controller.render';

declare global {
    interface Window { pcb: any; }
}

export default class BaseController extends React.Component {
    constructor (props:any, title:string) {
        super(props);
        document.title = title;
        window.pcb = (name:string, data:any) => {
            if (this[name + 'CB']) {
                this[name + 'CB'](data);
            }
        };
    }
}

export function Render (target) {
    return render(target);
}
