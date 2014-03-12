
demoApp.config(function ($routeProvider){
    $routeProvider
        .when('/',
            {
                controller : 'IndexController',
                templateUrl: 'partials/projectName.html'
            })
        .when('/ClassesDeclaration',
            {
                controller : 'ClassesController',
                templateUrl: 'partials/classesList.html'
            })
        .when('/classContent',
            {
                controller : 'ClassContentController',
                templateUrl: 'partials/classContent.html'
            })
        .when('/attributeEdition/:attrIndex',
            {
                controller : 'AttributeEditionController',
                templateUrl: 'partials/AttributeModification.html'
            })
        .when('/methodEdition/:MethodIndex',
            {
                controller : 'MethodEditionController',
                templateUrl: 'partials/MethodModification.html'
            })
        .otherwise({ 
            redirectTo : '/'
        });
});
