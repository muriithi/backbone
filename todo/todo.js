//todo.js
jQuery(function($){
	window.todo = Backbone.Model.extend({
		defaults : {
			done : false,
		},
		toggle : function(){
			this.save({done : !this.get("done")});
		}
	});
	
	window.todolist = Backbone.Collection.extend({
		
		model : todo,
		
		localStorage : new Store("todos"),
		
		done :  function(){
			return this.filter(function (todo){ 
				return todo.get("done");
			});
		},
		
		
		remaining: function (){
			return this.without.apply(this, this.done());
		},

	});
});