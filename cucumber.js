const common = `
  --require runner/assertions.js
  --require runner/hooks.js 
  --require steps/
  `;

module.exports = {
  default: `${common} features/**/*.feature --publish-quiet`,
};