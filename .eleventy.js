module.exports = function(eleventyConfig) {
  // Define input and output directories
  eleventyConfig.addPassthroughCopy("mew_score/_includes"); // Optional: Copy static assets, if any
  
  // Add global data
  eleventyConfig.addGlobalData('baseUrl', '/');
  // now i can specigy the baseUrl in my code as {{ baseUrl }}
  
  // Add other configurations if needed

  // Return directory settings
  return {
    dir: {
      input: "mew_score", // Source directory
      output: "mew_score/_site" // Build output directory
    }
  };
};
