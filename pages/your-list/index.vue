<template>
  <section>
    <div class="bg-green-400 shadow-sm mb-5 md:mb-10 flex justify-center">
      <NuxtLink to="/">
        <h1 class="text-center text-2xl text-white p-5 italic">Your To-Do List</h1>
      </NuxtLink>
    </div>
    <div class="container mx-auto flex flex-col">
      <PanelCreateList/>

      <section class="flex flex-col container mx-auto">
        <h1 v-if="listCards.length" class="text-xl text-center mt-5 font-medium">Suas listas</h1>
        <h1 v-else class="text-xl text-center mt-5 font-medium">Você ainda não tem listas cadastradas</h1>
      
        <div class="md:flex-row md:flex md:flex-wrap md:justify-center">
          <div v-for="card in listCards" :key="card.uuid" class="bg-white rounded shadow-md mt-4 ml-1 mr-1 md:w-1/4">
            <PanelList :card="card"/>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { mapState } from 'vuex';

export default {
  beforeMount: function() {
    this.$store.dispatch('loadList');
  },
  mounted: function() {
    /** PanelList */
    tippy('#add-item', {
      content: 'Confirmar',
      trigger: 'mouseenter',
      placement: 'bottom',
    });

    tippy('#remove-list', {
      content: 'Excluir lista',
      trigger: 'mouseenter',
      placement: 'bottom',
    });


    /** PanelCreateList */
    tippy('#description', {
      content: 'Uma breve descrição com máximo de 50 caracteres.',
      trigger: 'click',
      placement: 'bottom',
    });

    this.$store.dispatch('loadList');
  },
  computed: mapState([
    'listCards'
  ]),
}
</script>