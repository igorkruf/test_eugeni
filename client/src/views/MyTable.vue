<template>
  <div class="table grid">
    <table>
      <tr v-for="(ggg_item, index) in ggg" :key="index" class="stroka grid">
        <td>{{ ggg_item.id }}</td>
        <td>{{ ggg_item.val }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {},
  computed: { ...mapGetters(["ggg"]) },
};
</script>
<style lang="scss">
.table {
  grid-template-columns: 1fr;

  .stroka {
    padding: 20px;
    border: 1px solid grey;
    grid-template-columns: 50px 1fr;
  }
}
</style>