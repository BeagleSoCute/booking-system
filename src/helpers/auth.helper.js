export const checkIsAuth = () => {
  const isAuthen = localStorage.getItem("token");
  if(isAuthen){
    return true
  }else{
    return false
  }
};
