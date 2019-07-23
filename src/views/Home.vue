<template>
  <div class="home">
    <MyButton :url="location">
      <template #btn2> btn1 </template>
      <template #btn1 :btn-one="btnOne"> btn2 </template>
    </MyButton>
    <Parent></Parent>
    <span>{{ count }}</span>
  </div>
</template>

<script>
import Parent from "@/components/Parent";
import MyButton from "@/components/MyButton";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Parent,
    MyButton
  },
  data() {
    return {
      btnOne: "btnOne",
      location: "/about"
    };
  },
  computed: mapState({
    count: state => state.count,
    countAlias: "count",
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.done).length;
    }
  })
};
</script>
