appMain.controller('appController',function($scope){
  $scope.list = [{'title':'You must be having something to do...', 'done':false},]
  $scope.addToList = function(){
    if($scope.addToDo){
      $scope.list.push({'title':$scope.addToDo, 'done':false})
      $scope.addToDo = ''
    }
  }
  $scope.clearList = function(){
    $scope.list = [] 
  }
  $scope.clearCompleted = function(){
    $scope.list = $scope.list.filter(function(item){
      return !item.done
    })
  }
  $scope.sortList = function(){
    $scope.list.sort(compareValues('title')); 
  }
  function compareValues(key, order='asc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0; 
      }
  
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? (comparison * -1) : comparison
      );
    };
  }
});