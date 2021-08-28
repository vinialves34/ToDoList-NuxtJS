<template>
  <div class="w-max rounded-2xl border-solid shadow-lg">
    <div id="title" class="bg-green-400 rounded-t-2xl">
      <h1 class="text-center text-4xl text-white p-10 italic">Your To-Do List</h1>
    </div>

    <div class="p-5 flex justify-center flex-col">
      <input
        v-model="username"
        class="form-input px-3 py-2 rounded focus:outline-none focus:ring-1 focus:border-blue-300"
        type="text" name="username" id="username"
        placeholder="Digite seu nome"
      >

      <button @click="printUsername()"
        class="bg-green-400 text-white font-bold py-2 px-4 rounded mt-5"
        id="submit-username">Começar
      </button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data: () => {
    return {
      username: ""
    }
  },
  methods: {
    printUsername: function() {
      if (this.username) {
        Swal.fire(this.username);
      }
    }
  }
}
</script>
