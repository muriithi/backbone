(function($){
	var ListView = Backbone.View.extend({
		el : $('body'),			     				//Part of DOM where the view will be rendered
		
		events : {
			"click button#add" :"addItem"
			
		},
		
		initialize : function(){					//Called when view instance is created	
			_.bindAll(this , 'render' , 'addItem'); 	// binds the value of 'this' inside these functions to ListView
			
			this.counter = 0;			
			this.render();						//renders view in el	
			
		},
		render : function(){
			
			$(this.el).append("<button id ='add' >Add Item</button>");
			$(this.el).append("<ul></ul>");
			
			
		},
		
		addItem : function(){
			this.counter++;
			$('ul', this.el).append("<li>hello world "+this.counter+"</li>");
			
		},
		
	});
	
	var list1 = new ListView();

})(jQuery);