<template>
  <div class="profile">
    <div class="page">
      <div class="title">
        <h1>You profile</h1>
        <img class="title__avatar" :src="link" />
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
      <button class="page__button" @click="logOut">LogOut</button>
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

      this.$router.push("/login");
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
    max-width: 150px;
    max-height: 150px;
    width: 40%;
    border: #5a202a 2px solid;
    border-radius: 20px;
    background-color: #fff;
    margin: 5px;
  }
}
.page {
  &__button {
    display: inline-block;
    width: auto;
    height: auto;
    padding: 10px;
    margin: 0 20px 15px 20px;

    text-align: center;
    text-decoration: none;
    @media (max-width: 768px) {
      margin: 0 10px 5px 10px;
    }
  }
}
</style>