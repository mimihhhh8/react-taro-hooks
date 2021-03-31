module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    devServer: {
      host: "localhost",
      port: 10086,
      proxy: [
        {
          context: ['/chapi', '/bd', '/official-account', '/passport', '/sms',],
          target: "https://gateway-v1-test.360huzhubao.com",
          // pathRewrite: {
          //   '^/volunteerapi': '/bd'
          // },
          changeOrigin: true,
          secure: false,
        },
      ],
    },
  },
};
