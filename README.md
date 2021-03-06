
# iView alipay

### 一套高质量的支付宝小程序 UI 组件库，支持钉钉小程序。

> 使用 [Antmove](https://ant-move.github.io/website/) 小程序转换器基于 [iview-weapp](https://github.com/TalkingData/iview-weapp) 转换得到。

## 文档

* [iView Aliapp 文档](https://ant-move.github.io/iview-alipay-docs/)
* [iView weapp 文档](https://weapp.iviewui.com)

## npm

> 切记通过 antmove-compiler 命令编译
* [dd](https://www.npmjs.com/package/iview-aliapp-dd)
* [alipay](https://www.npmjs.com/package/iview-aliapp)

> 大部分组件都保留了原有的用法，只有一两个做了少许的改动。

## 快速上手
### 使用之前
在开始使用 iView alipay 之前，你需要先阅读 [支付宝小程序自定义组件](https://docs.alipay.com/mini/framework/custom-component-overview) 的相关文档。

### 如何使用
下载 iView 的代码，将 `dist` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "i-button": "../../dist/button/index"
}
```
2. 在 axml 中使用组件：
```html
<i-button type="primary" onClick="handleClick">这是一个按钮</i-button>
```

### 预览

* 支付宝小程序

<img width='150px' src='https://cache.amap.com/ecology/tool/antmove/web/assets/iView-Aliapp.jpg'/>

* gif 效果图

<img width='150px' src='https://ant-move.github.io/iview-alipay-docs/dist/d9b709109f7d0eb5ed600de339e757ae.gif' /><img width='150px' src='https://ant-move.github.io/iview-alipay-docs/dist/b684ddb29bb562854bb25990fcea34be.gif' />

### IDE 预览

下载本项目到本地，使用支付宝 IDE 打开 iview-alipay 即可预览。

> 预览时请在项目详情设置中开启 `component2` 编译，详情可参考[支付宝小程序自定义组件使用介绍](https://docs.alipay.com/mini/framework/custom-component-overview#%E4%BD%BF%E7%94%A8%E9%A1%BB%E7%9F%A5)。

# 联系

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助。

* 钉钉微信交流群： <img width='200px' src='https://ant-move.github.io/website/img/contact-dingding.jpg'/> <img width='200px' src='https://cache.amap.com/ecology/tool/antmove/web/assets/wx-qrcode.JPG'/>
* 邮件：amap-appx@service.autonavi.com

## License

[MIT](http://opensource.org/licenses/MIT)

## 感谢

感谢 TalkingData 团队对 ivew-weapp 的贡献，本项目基于 iview-weapp 转换而来，并做了支付宝小程序平台的适配兼容。
