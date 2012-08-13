(function($){
	var ListView = Backbone.View.extend({
		el : $('body'),			     	//Part of DOM where the view will be rendered
		
		initialize : function(){		//Called when view instance is created	
			_.bindAll(this , 'render'); 	// binds the value of 'this' inside these functions to ListView
			
			this.render();			//renders view in el	
			
		},
		render : function(){
			$(this.el).append("<p>Hello Backbone!</p>");
			
		},
		
	});
	
	var list1 = new ListView();

})(jQuery);