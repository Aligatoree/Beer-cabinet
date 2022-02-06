<template>
  <div class="profile">
    <div class="page">
      <div class="title">
        <h1>You profile</h1>
        <img class="title__avatar" :src="link" width="150px" height="150px" />
      </div>
      <ul class="page__list">
        <li
          class="page__item"
          v-for="(value, property) in userInfo"
          :key="value"
        >
          <p class="page__property">{{ property.replace(/[_]/g, " ") }}:</p>
          <p class="page__value">{{ value }}</p>
        </li>
      </ul>
      <a class="page__button" @click="logOut" href="/">LogOut</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: ["userInfo", "link"],
  methods: {
    logOut() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  &__avatar {
    border: #5a202a 2px solid;
    border-radius: 20px;
    background-color: #fff;
  }
}
.page {
  &__button {
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 10px;
    margin: 0 20px 15px 20px;

    text-align: center;
    text-decoration: none;
    @media (max-width: 768px) {
      height: 20px;
      margin: 0 10px 5px 10px;
    }
  }
}
</style>