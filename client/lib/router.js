

Router.configure({
	'layoutTemplate': "layout",
	 loadingTemplate: 'loading'

});
Router.route('/items', {
	name: 'items'

});
Router.route('/customize', {
	name: 'customize'
	
});
Router.route('/', {
	name: 'home'
	
});