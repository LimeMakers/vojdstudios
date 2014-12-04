vojdstudios
===========

Vojd Studios website

Remember: It's pronounced Void Studios, not Vozhd Studios

How to edit theme:
=================

1. Install NPM and Grunt if not already installed:

	``` shell
	sudo npm install -g grunt-cli
	```
	
2. Run watch script in the background to automatically sync with spotify whenever you change a file:
 
	```shell
	grunt watch:shopify
	```
	
	Other grunt parameters:
	
- `shopify:download`	Downloads a single theme file from shopify, or the entire theme if no file is specified
- `shopify:upload`		Uploads a single theme file to Shopify, or the entire theme if no file is specified
- `shopify:delete`		Removes a theme file from Shopify, don't use this
