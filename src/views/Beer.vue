<template>
  <div class="beer">
    <div class="page">
      <h1>Try this beer</h1>
      <ul class="page__list">
        <li
          class="page__item"
          v-for="(value, property) in beerInfo"
          :key="value"
        >
          <p class="page__property">{{ property }}:</p>
          <p class="page__value">{{ value }}</p>
        </li>
      </ul>

      <button @click="rollBeer()" class="page__button">Roll new beer!</button>
    </div>

    <div class="page__image"></div>
  </div>
</template>

<script>
export default {
  name: "beer",
  props: {
    beerInfo: Object,
  },
  methods: {
    rollBeer() {
      this.$emit("rollbutton");
    },
  },
};
</script>

<style scoped lang="scss">
</style>