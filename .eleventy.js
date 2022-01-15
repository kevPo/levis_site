module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("jpeg");
  eleventyConfig.addPassthroughCopy("png");
};
