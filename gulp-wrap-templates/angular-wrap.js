/* jshint ignore:start */
(function(){
  angular.module('visUtil', [])
  .service('visUtil', function(){
    <%=contents%>
    return visUtil;
  });
})();
