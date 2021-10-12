<template>
  <section class="bg-white rounded shadow-md flex flex-col items-center ml-1 mr-1">
    <h1 class="text-xl text-center mt-5 font-medium">Adicione sua lista</h1>
    <form class="flex flex-col md:flex-row items-center m-5 md:m-10" @submit.prevent="createList()">
      <div class="m-2 flex md:block">
        <input 
          v-model="titleList"
          placeholder="Título da lista"
          type="text"
          name="title" 
          id="title" 
          class="block form-input border-gray-300 shadow-md px-3 py-2 rounded focus:outline-none focus:ring-1 focus:border-blue-300" 
        >
      </div>
      <div class="m-2 flex md:block">
        <input 
          v-model="descriptionList"
          placeholder="Descrição da lista"
          type="text" 
          name="description" 
          id="description"
          maxlength="50"
          class="block form-input border-gray-300 shadow-md px-3 py-2 rounded focus:outline-none focus:ring-1 focus:border-blue-300"
        >
      </div>
      <div class="ml-2 flex md:block">
        <button
          class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded m-1 md:m-0"
          type="submit">Adicionar
        </button>

        <button
          @click="clearForm()"
          class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded m-1 md:m-0"
          type="reset">Limpar
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data: function() {
    return {
      titleList: "",
      descriptionList: ""
    }
  },
  methods: {
    createList() {
      if (!this.titleList) {
        Swal.fire({
          icon: 'info',
          title: 'Informação',
          text: 'Por favor, informe um título para sua lista.',
          confirmButtonColor: '#34d399'
        });

        return false;
      }

      let data = {
        "title": this.titleList,
        "description": this.descriptionList
      }

      this.$store.dispatch('createList', JSON.stringify(data));
      this.clearForm();
    },

    clearForm() {
      this.titleList = "";
      this.descriptionList = "";
    },
  }
}
</script>
