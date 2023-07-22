module.exports = {
  apps: [
    {
      name: "my-react-app",
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
      hooks: {
        "post-setup": "npm install",
      },
    },
  ],
};
