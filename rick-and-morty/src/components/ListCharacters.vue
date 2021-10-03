<template>
  <section>
      <div class="characters">
          <div class="chatacters__item" v-for="character in characters" :key="character.id">
              <CardCharacters :character="character"/>
          </div>
      </div>
  </section>
</template>

<script>
import { onMounted,computed} from 'vue'
import {useStore} from 'vuex'

import CardCharacters from '@/components/CardCharacters'


export default {
    components:{
CardCharacters
    },
setup(){
const store = useStore()
const characters = computed(()=>{
    return store.state.charactersfilter
})
onMounted(()=>{
    store.dispatch('getcharacters')
})
return{
    characters
    }
}
}
</script>

<style lang="scss">
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>