//javascript library called 'library'
//-----------------------------------------
   
(function(window) {
   function defineVader(){
      var Vader = function(search_term){
      	var target = '';
      	switch(search_term.substr(0,1)) {
	      			case '#':
	      				target = document.getElementById(search_term.substr(1));
      	}

//define the library
      	var Library = function(element) {
	      	console.log(element);
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

		element.feelings = function(feelings) {
			alert(feelings);
		};

		element.click = function(){
			
		};

		element.makeComponent = function(template) {
			
			

			class SearchComponent extends HTMLElement {
				static get observedAttributes() {
		            return ['disabled', 'open'];
		          }
		        
		        constructor() {
					super();
					let shadowRoot = this.attachShadow({mode: 'open'});
					shadowRoot.innerHTML = template;
		            
		           // const input = this.shadowRoot.querySelector('input'); input.addEventListener('keypress', function(e){
		           //      if(e.which === 13) {
		           //          console.log(input.value);
		           //      }
		           //  });
		            
		           //  const button = this.shadowRoot.querySelector('button');
		           //  button.addEventListener('click', function(e){
		           //      console.log(input.value);
		           //  })
				}
		        
				get value() {
					return this.shadowRoot.querySelector('input').value;     
				}

				set value(value) {
		            this.setAttribute("value", value);
		            return this.shadowRoot.querySelector('input').value = value;
				}
			}

			return window.customElements.define('my-component', SearchComponent);
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
      };

      return Vader;
   };
   
   if(typeof Vader === 'undefined'){
      window.Vader = defineVader();
   }
   
})(window);














(function() {
	const template = `
		<style>
            
		</style>
		<div>
            <input class="blue" type="text" value="" name="search">
			
            <button>Submit</button>
		</div>		
	`;

	class SearchComponent extends HTMLElement {
		static get observedAttributes() {
            return ['disabled', 'open'];
          }
        
        constructor() {
			super();
			let shadowRoot = this.attachShadow({mode: 'open'});
			shadowRoot.innerHTML = template;
            
           // const input = this.shadowRoot.querySelector('input'); input.addEventListener('keypress', function(e){
           //      if(e.which === 13) {
           //          console.log(input.value);
           //      }
           //  });
            
           //  const button = this.shadowRoot.querySelector('button');
           //  button.addEventListener('click', function(e){
           //      console.log(input.value);
           //  })
		}
        
		get value() {
			return this.shadowRoot.querySelector('input').value;     
		}

		set value(value) {
            this.setAttribute("value", value);
            return this.shadowRoot.querySelector('input').value = value;
		}
	}

	window.customElements.define('search-input', SearchComponent);
})();

