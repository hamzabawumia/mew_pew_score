module.exports = function(eleventyConfig) {
  // Define input and output directories
  // eleventyConfig.addPassthroughCopy("mew_pew_score/_includes"); // Optional: Copy static assets, if any
  
  eleventyConfig.setTemplateFormats(["njk", "html", "md"]);
  // Return directory settings
  return {
    dir: {
      input: "mew_pew_score", // Source directory
      output: "mew_pew_score/_site", // Build output directory
    }
  };
};
