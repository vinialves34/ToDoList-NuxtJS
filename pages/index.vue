<template>
  <section class="container mx-auto">
    <div class="flex flex-row justify-around items-center h-screen">
      <div class="pl-14">
        <img class="h-96" src="~/assets/images/selection_list.svg" alt="art_login">
      </div>
      <div class="pr-14">
        <Login/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      artLogin: ""
    }
  },
  created: function() {
    this.randomArt();
  },
  methods: {
    randomArt: function() {
      let arts = [
        '~/assets/images/complete_task.svg',
        '~/assets/images/to_do_list.svg',
        '~/assets/images/list.svg',
        '~/assets/images/selection_list.svg',
        '~/assets/images/task_list.svg',
      ];

      this.artLogin = arts[Math.floor(Math.random()*arts.length)];
    }
  }
}
</script>
