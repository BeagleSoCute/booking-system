module.exports = {
  // Common configurations for both dev and prod...

  // Development-specific configurations
  devServer: {
    allowedHosts: [
      "booking-frontend-vm.australiasoutheast.cloudapp.azure.com",
      "http://booking-frontend-vm.australiasoutheast.cloudapp.azure.com/",
    ],
  },
};
