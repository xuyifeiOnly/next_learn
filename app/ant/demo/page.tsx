"use client";
// 如果是在 Pages Router 中使用，则不需要添加 "use client"
import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Space, Button } from "antd";
import { ceshiServer } from "@/lib/action";
import TrpcButton from "./_com";
const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};
const btnSubmit = async () => {
  const result = await ceshiServer();
  // console.log(result);
  // console.time("开始");
  // fibonacci(40)
  // console.timeEnd("开始");
  // return
  const worker = new Worker("/workers/myWorker.js");

  worker.onmessage = function (event) {
    const result = event.data;
    console.log(result);
    console.timeEnd("开始");
  };
  console.time("开始");
  worker.postMessage(40);
};
console.log(31);

const Home = () => (
  <div className="App text-blue-300 m-20 justify-center">
    <Button onClick={btnSubmit} type="primary">
      Buttonfsdaffa好的
      {/* {new Date().getTime()} */}
    </Button>

    <DatePicker onChange={onChange} />
    <div>
      <TrpcButton></TrpcButton>
    </div>
  </div>
);

export default Home;
