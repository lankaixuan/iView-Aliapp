const _Page = require("../../__antmove/component/componentClass.js")("Page");

my.setStorageSync({
  key: "activeComponent",
  data: {
    is: "pages/message/index"
  }
});

const {
  $Message
} = require("../../dist/base/index");

_Page({
  handleDefault() {
    $Message({
      content: "这是一条普通提醒"
    });
  },

  handleSuccess() {
    $Message({
      content: "这是一条成功提醒",
      type: "success"
    });
  },

  handleWarning() {
    $Message({
      content: "这是一条警告提醒",
      type: "warning"
    });
  },

  handleError() {
    $Message({
      content: "这是一条错误提醒",
      type: "error"
    });
  },

  handleDuration() {
    $Message({
      content: "我将在 5 秒后消失",
      duration: 5
    });
  }

});