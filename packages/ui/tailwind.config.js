// @ts-expect-error - not sure why this is throwing an error
const sharedConfig = require("config/tailwind.config.js");

module.exports = {
  presets: [sharedConfig],
};