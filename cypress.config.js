const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // Tambahkan event node setup di sini
    },
    // Opsi e2e lainnya dapat ditambahkan di sini
  },
});
