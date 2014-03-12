
demoApp.factory('DataFactory', function(){
    var projectName = null;
/*    var classesList = [
        {name:'cavolfiore', comments : "", hasParent : false,   attributes :[], methods : [{name : 'tagliare', defintition :"", inherited: false, overridden : ''}, {name : 'impastare', defintition :"", inherited: 'inherited', overridden : '( overridden )'}]},
        {name:'torta', comments : "", hasParent : false,   attributes :[], methods : [{name : 'tagliare', defintition :"", inherited: false, overridden : ''}, {name : 'impastare', defintition :"", inherited: false, overridden : ''}]},
    ]; 
    classesList[0].attributes[0] = {name: 'pomodoro', mandatory: 0, rw : 0, VarType: "Any", defaultValue:"", trigger:"", inherited: false};
    classesList[0].attributes[1] = {name: 'mozzarella', mandatory: 0, rw : 0, VarType: "Any", defaultValue:"", trigger:"", inherited: false};
    classesList[0].attributes[2] = {name: 'farina', mandatory: 0, rw : 1, VarType: "Hash", defaultValue:"", trigger:"blabla", inherited: false};
    classesList[0].attributes[3] = {name: 'lievito', mandatory: 0, rw : 0, VarType: "Any", defaultValue:"", trigger:"", inherited: false};
    classesList[0].methods[2] = {name : 'cuocere', defintition :"", inherited: 'inherited', overridden : ''};

    classesList[1].attributes[0] = {name: 'farina', mandatory: 1, rw : 0, VarType: "Hash", defaultValue:"", trigger:"oh noooooo", inherited: 'inherited'};
    classesList[1].attributes[1] = {name: 'uova', mandatory: 1, rw : 0, VarType: "Any", defaultValue:"", trigger:"", inherited: false};
    classesList[1].methods[0] = {name : 'sminuzzare', defintition :"", inherited: false, overridden : ''};*/

    var classesList = [];

    var selectedClassIndex = 1;
    var selectedClass = null;

    var factory ={};

    factory.getClassesList = function(){
        return classesList;
    };
    factory.getProjectName = function(){
        return projectName;
    };
    factory.getSelectedClassIndex = function(){
        return selectedClassIndex;
    };
    factory.getSelectedClass = function(){
        return selectedClass;
    };


    factory.setProjectName = function(name){
        projectName = name;
    };
    factory.setClassesList = function(classes){
        classesList = classes;
    };
    factory.setSelectedClassIndex = function(classIndx){
        selectedClassIndex = classIndx;
    };

    factory.setSelectedClass = function(SelClass){
        selectedClass = SelClass;
    };

    return factory;

});
