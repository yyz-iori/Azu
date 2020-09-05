// 商城Vuex-actions
export default{
  saveUsername(context,username){
      context.commit('saveUserName',username);
  },
  saveCartCount(context,count){
    context.commit('saveCartCount',count);
  }
}