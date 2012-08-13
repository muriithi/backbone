(function($){
	var ListView = Backbone.View.extend({
		el : $('body'),			     //Part of DOM where the view will be rendered
		
		initialize : function(){
			_.bindAll(this , 'render'); // binds the value of 'this' inside these functions to ListView
			
			this.render();		
			
		},
		render : function(){
			$(this.el).append("<p>Hello Backbone!</p>");
			
		},
		
	});
	
	var list1 = new ListView();

})(jQuery);