<template>
  <div class="forma grid">
    <textarea v-model="massege" />
    <button @click="send_messege">Пересчитать</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      massege: [
        {
          id: 1,
          val: 100,
        },
        {
          id: 2,
          val: 200,
        },
        {
          id: 3,
          val: 300,
        },
        {
          id: 4,
          val: 400,
        },
        {
          id: 5,
          val: 500,
        },
        {
          id: 6,
          val: 600,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["set_ggg"]),
    send_messege() {
      console.log(this.massege);
      this.set_ggg({ massege: this.massege });
    },
  },
};
</script>
<style lang="scss">
.forma {
  grid-template-columns: 100%;
  grid-template-rows: 200px 50px;

  button {
    font-size: 18px;
  }
}
</style>