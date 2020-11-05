/*
 * @Author: huajian
 * @LastEditors: huajian
 */
import React from 'react';
import ReactDOM from 'react-dom';

export default function Render (Target:typeof React.Component) {
    ReactDOM.render(
        <React.StrictMode>
            <Target/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

