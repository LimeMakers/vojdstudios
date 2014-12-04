module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');
 
  grunt.initConfig({
    shopify: {
      options: {
        //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
        api_key: "fa8b1464d6dc5fcd6e0c9f51bde3fa3b",
        password: "fb92deb0d63f29c5ef2949d4a88f6f0e",
        url: "limemakers.myshopify.com",
        base: 'shop/',
        ThemeId: "8914385",
        disable_growl_notifications: "true"
      }
    },
    watch: {
      shopify: {
        files: ['shop/**'],
        tasks: ["shopify"]
      }
    }
 
  });
 
  grunt.registerTask('default', ['shopify']);
 
};