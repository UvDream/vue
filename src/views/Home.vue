<template>
  <div class="home">
    <MyButton :url="location">
      <template #btn2>
        btn1
      </template>
      <template #btn1 :btn-one="btnOne">
        btn2
      </template>
    </MyButton>
    <Parent></Parent>
  </div>
</template>

<script>
import Parent from "@/components/Parent";
import MyButton from "@/components/MyButton";

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
  }
};
</script>
