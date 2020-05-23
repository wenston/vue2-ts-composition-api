module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 2,
      features: {
        "nesting-rules": true, //stage是0的情况下，默认就可以嵌套
      },
    },
    //自定义变量
    // 'postcss-custom-properties': {
    //   importFrom:[
    //     'src/assets/style/var.css'//变量文件
    //   ]
    // },
    // //font-family:system-ui
    // 'postcss-font-family-system-ui': {
    //   family: '"PingFang SC Medium", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif'
    // },
    // // 'postcss-place': {}
    // //TODO: 尚未测试循环和条件判断的插件
  },
}
