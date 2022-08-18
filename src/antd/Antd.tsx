import React, {useState} from 'react';
import {ConfigProvider, DatePicker, message, Space, version} from "antd";
import moment from 'moment';
import zhCN from 'antd/es/locale/zh_CN';
import {DatePickerProps, RangePickerProps} from "antd/es/date-picker";

moment.locale('zh-cn');

const {RangePicker} = DatePicker;

const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
};

const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', value);
};

const Antd = () => (
    <Space direction="horizontal" size={12}>
        <DatePicker showTime onChange={onChange} onOk={onOk}/>
        <RangePicker
            showTime={{format: 'HH:mm'}}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
        />
    </Space>
);

export default Antd;