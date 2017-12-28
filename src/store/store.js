export const state = {
  message: 'hello vuex',
  counter: 0
}

export const mutations = {
  increment (state) {
    state.counter += 1
  },
  messageUpdate (state, val) {
    state.message = val.msg
  }
}

export const actions = {
  increment (context) {
    context.commit('increment')
  },
  messageUpdate (context, val) {
    context.commit({
      type: 'messageUpdate',
      msg: val.msg
    })
  }
}

export const getters = {
  getCounter (state) {
    return `${state.counter}回`
  }
}
