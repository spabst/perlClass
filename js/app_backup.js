var demoApp = angular.module('demoApp', []);

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
        .when('/view1',
            {
                controller : 'NewController',
                templateUrl: 'partials/view1.html'
            })
        .when('/view2',
            {
                
                templateUrl: 'partials/view2.html'
            })
        .otherwise({ 
            redirectTo : '/'
        });
});

/*demoApp.factory('DataFactory', function(){
    var classesList = 

})
*/
function JsonDataController($scope, $location){
    $scope.projectName = "maracaibo";
    $scope.classesList = [
    {name:'pizza', comments : "",  attributes :[{name:'pomodoro'}, {name:'mozzarella'}], methods : [{name : 'tagliare'}, {name : 'impastare'}]},
    {name:'torta', comments : "come preparare una bella torta", attributes :[{name:'farina'}, {name:'cacao'}], methods : [{name : 'cuocere'}, {name : 'infornare'}]}
    ];
    $scope.SelectedClass = 0 ;

    $scope.classesList[0].attributes[0] = {name: 'pomodoro', mandatory: 0, rw : 0, VarType: "Any", defaultValue:"", trigger:""};
    $scope.classesList[0].attributes[1] = {name: 'mozzarella', mandatory: 0, rw : 0, VarType: "Any", defaultValue:"", trigger:""};
    $scope.classesList[0].attributes[2] = {name: 'farina', mandatory: 0, rw : 0, VarType: "Any", defaultValue:"", trigger:""};

  

    $scope.setProjectName = function(){
        $scope.projectName = $scope.project_name;
        //alert($scope.projectName);
        $location.path('/ClassesDeclaration')

    };
 
    $scope.AddClass = function(){
        $scope.classesList.push({name: $scope.NewClass_name, comments : "",  attributes :[] , methods : [], hasParent: false}) ;
        $location.path('/ClassesDeclaration');
        $('#Modal').foundation('reveal', 'close');
    };

     
    $scope.AddMethod = function(){
        $scope.classesList[$scope.classesList.indexOf($scope.SelectedClass)].methods.push({name: $scope.NewMethod_name}) ;
        $location.path('/classContent');
        $('#AddMethodsModal').foundation('reveal', 'close');
    };

    $scope.AddAttribut = function(){
        $scope.attr_properties = {name: $scope.NewAttribute_name, mandatory: 0, rw : 0, VarType: "Any", defaultValue:"", trigger:""};
        $scope.classesList[$scope.classesList.indexOf($scope.SelectedClass)].attributes.push($scope.attr_properties) ;
        $location.path('/classContent');
        $('#AddAttributeModal').foundation('reveal', 'close');
    };

    
 
};


function IndexController($scope, $location){
    $scope.OpenReveal = function(){
        $('#SetProjectName').foundation('reveal', 'open');
        //$location.path("/");
    };


};

function ClassesController($scope, $location){
    $('#SetProjectName').foundation('reveal', 'close');

    $scope.OpenReveal = function(){
        $('#Modal').foundation('reveal', 'open');
        //$location.path("/");
    };

};

function ClassContentController($scope, $location){
    $scope.parentName = $scope.classesList[0];
    $scope.ShowHide = function(){
         $('#set_ParentClass').slideToggle();
    };
    $scope.OpenAttributesReveal = function(){
        $('#AddAttributeModal').foundation('reveal', 'open');
        //$location.path("/");
    };

    $scope.OpenMethodsReveal = function(){
        $('#AddMethodsModal').foundation('reveal', 'open');
    };
};


function AttributeEditionController($scope, $location, $routeParams){
    $scope.attributeIndex = $routeParams.attrIndex;
    $scope.assegnazioneAttributo = {};
    $scope.Attribute = {};
    $scope.Attribute.trigger = "asdfkhaskdjhfjkasdfhjkafh";
    $scope.varTypes = [
                    { value: 'Any', name : 'Any', category : 'simple', suggestion : "" },
                    { value: 'Str', name : 'String', category : 'simple', suggestion : "Ex : Some text. Quotation marks are not needed" },
                    { value: 'Array', name : 'Array', category : 'simple', suggestion : 'Ex: ( "An" , "array" , "with" , 5 , "elements" ) or (1 .. 10)' },
                    { value: 'Hash', name : 'Hash', category : 'simple', suggestion : 'Ex: ( "seba" => 213)' },
                    { value: 'Bool', name : 'Boolean', category : 'simple', suggestion : "Ex: 0 or 1" },
                    { value: 'Undef', name : 'Undefined', category : 'simple', suggestion : "" },
                    { value: 'Num', name : 'Numeric', category : 'simple', suggestion : "Ex: 5.231423"},
                    { value: 'Int', name : 'Integers', category : 'simple', suggestion : "Ex: 5"},
                    { value: 'ScalarRef', name : 'Reference to a scalar ', category : 'references', suggestion : "" },
                    { value: 'ArreyRef', name : 'Reference to a an array', category : 'references', suggestion : ""},
                    { value: 'HashRef', name : 'Reference to a hash', category : 'references', suggestion : ""},
    ];
    $scope.NewAttribute = 0;
};








