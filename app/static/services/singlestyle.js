angular.module('ArtSnob')

	.service('SingleStyle', ['$http', function ($http) {


		var observerCallbacks = [];

		//register an observer
		this.registerObserverCallback = function(callback){
		observerCallbacks.push(callback);
		};

		//call this when you know 'foo' has been changed
		var notifyObservers = function(){
			angular.forEach(observerCallbacks, function(callback){
			  callback();
			});
		};

	    this.get = function(style_id, callback) {
	    	url = 'http://artsnob.me:5000/api/artwork/' + style_id;
	        $http.get(url).then(function(response) {
	        	callback(response.data)
	        	notifyObservers();
	        });

	        return
	    }
}]);