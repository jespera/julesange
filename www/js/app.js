angular.module('julesangeApp', ['ngSanitize']).
config(['$routeProvider', 
				function($routeProvider) {
					$routeProvider.when('/oversigt', 
						{templateUrl: 'partials/oversigt.html', controller: OversigtCntl}
					);
					$routeProvider.when('/sang/:sangId',
						{templateUrl: 'partials/sang.html', controller: SangCntl}
					);
					$routeProvider.when('/evangelie/:evangId',
						{templateUrl: 'partials/evangelie.html', controller: EvangCntl}
					);
					$routeProvider.otherwise({redirectTo: '/oversigt'});
				}
			]
		);
