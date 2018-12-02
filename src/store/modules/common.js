export default{
  state: {
    city: localStorage.city || '北京'
  },
  getters: {
  },
  actions: {
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
}
