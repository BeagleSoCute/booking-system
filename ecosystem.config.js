module.exports = {
  apps: [
    {
      name: "booking-frontend", // Replace with your app's name
      script: "npm",
      args: "start",
      interpreter: "none",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
