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
          context: ["/api"],
          target: "https://gateway-v1-test.360huzhubao.com",
          pathRewrite: { '^/api': '' },
          changeOrigin: true,
          secure: false,
        },
      ],
    },
  },
};
