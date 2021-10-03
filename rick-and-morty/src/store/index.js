import { createStore } from 'vuex'

export default createStore({
  state: {
    characters:[],
    charactersfilter:[]
  },
  mutations: {
    SetCharacters(state,payload){
      state.characters =payload
    },
    SetCharactersfilter(state,payload){
      state.charactersfilter= payload
    }
  },
  actions: {
    async getcharacters({commit}){

      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        commit('SetCharacters', data.results)
        commit('SetCharactersfilter',data.results)        
        
      } catch (error) {
        console.error(error)
      }
    },
    filterByStatus({commit,state},status){
      const results = state.characters.filter((characters)=>{
        return characters.status.includes(status)
      })
      commit('SetCharactersfilter',results)    
    },
    filterByName({commit,state},name){
      const formatName = name.toLowerCase()
      const results = state.characters.filter((character)=>{
        const characterName = character.name.toLowerCase()

        if(characterName.includes(formatName)){
          return character
        }
      })
      commit('SetCharactersfilter',results)  
    }
  },
  modules: {
  }
})
