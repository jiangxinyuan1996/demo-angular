import Mock from "mockjs";

//拦截请求，返回假数据
Mock.mock("http://10.91.7.159:9080/my", {
  message: "调用成功",
  data: [
    { name: "XXXX1", code: "P00003" },
    { name: "XXXX2", code: "P00028" },
    { name: "XXXX3", code: "P00002" },
    { name: "XXXX4", code: "P00003" }
  ],
  rtn: "0"
})