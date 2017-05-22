//javascript library called 'library'
//-----------------------------------------
   
(function(window) {
    function defineForce(){
      
	      var Force = function(search_term){
	      	var target = '';

	      	if(search_term === undefined) {
	      			


      		//define the library
	      	var Other = function() {
		      	this.body = "No Component";
		      };

		     var element = Other.prototype;

		     element.feelings = function(feelings) {
				console.log("feelings", feelings);
				alert(feelings);
				return this;
			};
				
			element.makeComponent = function(componenetName, template) {
				class NewComponent extends HTMLElement {
					static get observedAttributes() {
			            return ['disabled', 'open'];
			          }
			        
			        constructor() {
						super();
						let shadowRoot = this.attachShadow({mode: 'open'});
						shadowRoot.innerHTML = template;
					}
			        
					get value() {
						return this.shadowRoot.querySelector('input').value;     
					}

					set value(value) {
			            this.setAttribute("value", value);
			            return this.shadowRoot.querySelector('input').value = value;
					}
				}
				this.body = window.customElements.define(componenetName, NewComponent);
				return this;
			};
			// end define the Other--------------



			var Other = new Other();
			
			return Other;		   







			 } else {




 				switch(search_term.substr(0,1)) {
      				case '#':
      				target = document.getElementById(search_term.substr(1));
		      	}

		//define the library
		      	var Library = function(element) {
			      	// console.log(element);
			      	this.elem = element;
			      };

			     var element = Library.prototype;

			   element.color = function(color) {
				  this.elem.style.color = color;
				  return this;
				};

				element.size = function(height, width) {
					this.elem.style.height = height;
					this.elem.style.width = width;
					return this;
				};

				element.border = function(one, two, three) {
					this.elem.style.border = one + " " + two + " " + three;
					return this;
				};

				element.forcePushRight = function(distance) {
					this.elem.style.marginLeft = distance;
				};


			


			//Japanese function calls...and they Work!!!
				element.色 = function(color) {
				this.elem.style.color = color;
				  return this;
				};

				element.いろ = function(color) {
				this.elem.style.color = color;
				  return this;
				};
		// end define the library--------------



				var library = new Library(target);
				return library;




			 }

		};
		return Force;
	};

	      	
   
   if(typeof Force === 'undefined'){
      window.Force = defineForce();
   }

})(window);












