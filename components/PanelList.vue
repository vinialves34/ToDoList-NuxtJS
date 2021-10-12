<template>
  <section>
    <div class="flex justify-end mt-2 mr-1 md:mr-2">
      <button @click="removeList(card.uuid)" id="remove-list" class="bg-red-400 hover:bg-red-500 text-white font-bold rounded w-5 m-1 md:m-0">
        <font-awesome-icon icon="times" :style="{ color: 'white' }"/>
      </button>
    </div>
    <div class="m-2 mt-0">
      <h1 class="text-center text-lg">{{ card.title }}</h1>
      <p class="ml-4 mr-4 text-center text-xs text-gray-500">{{ card.description }}</p>
    </div>

    <div class="m-2 pb-1 pt-1">
      <ul>
        <li v-for="item in card.items" :key="item.id" class="flex justify-between mt-1 mb-1">
          <span class="text-sm">{{ item.text }}</span>

          <div class="flex items-center ml-1 cursor-pointer" @click="changeStatus(card.uuid, item.id, item.status)">
            <span v-if="item.status" class="text-xs bg-green-400 text-white font-bold py-1 px-1 w-2/2 rounded m-1 md:m-0">Concluído</span>
            <span v-else class="text-xs bg-yellow-400 text-white font-bold py-1 px-1 w-2/2 h-6 rounded m-1 md:m-0">Pendente</span>
          </div>
        </li>
      </ul>
      
      <hr class="mt-4" v-if="card.items.length">

      <form @submit.prevent="addItem(card.uuid)" class="mt-4 mb-4 flex justify-between">
        <div>
          <input
            v-model="textItem"
            placeholder="Adicionar item"
            type="text" 
            class="block form-input border-gray-300 shadow-md py-1 rounded focus:outline-none focus:ring-1 focus:border-blue-300"
          >
        </div>

        <div>
          <button 
            id="add-item"
            type="submit"
            class="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-2 rounded m-1 md:m-0" 
          >
            <font-awesome-icon icon="check" :style="{ color: 'white' }"/>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  props: ['card'],
  data() {
    return {
      textItem: "",
    }
  },
  methods: {
    addItem(cardUuid) {
      if (!this.textItem) {
        Swal.fire({
          icon: 'info',
          title: 'Informação',
          text: 'Informe o texto para o item.',
          confirmButtonColor: '#34d399',
        });

        return false;
      }

      let dataItem = {
        "cardUuid": cardUuid,
        "text": this.textItem
      }

      this.$store.dispatch('createItem', JSON.stringify(dataItem));
      this.textItem = "";
    },

    changeStatus(cardUuid, itemId, status) {
      let dataItem = {
        "cardUuid": cardUuid,
        "itemId": itemId,
        "currentStatus": status
      }
      
      this.$store.dispatch('changeStatus', JSON.stringify(dataItem));
    },

    removeList(cardUuid) {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: 'Deseja realmente excluir esta lista?',
        confirmButtonColor: '#34d399',
        confirmButtonText: 'Confirmar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#f87171'
      }).then(confirm => {
        if (confirm.value) {
          this.$store.dispatch('removeList', cardUuid);
        }
      });
    }
  },
}
</script>
