(function(){
  <%=contents%>
  if(window !== undefined){
    window.visUtil = visUtil;
  }else if(module !== undefined){
    module.exports = visUtil;
  }
})();
