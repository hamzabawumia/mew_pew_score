module.exports = function(eleventyConfig) {
  // Define input and output directories
  eleventyConfig.addPassthroughCopy("mew_pew_score/_includes"); // This is important for git-pages to copy the static files
  
  eleventyConfig.setTemplateFormats(["njk", "html", "md"]);
  // Return directory settings
  return {
    dir: {
      input: "mew_pew_score", // Source directory
      output: "mew_pew_score/_site", // Build output directory
      includes: "_includes", // Directory for includes (partials, templates, etc.)
    }
  };
};
