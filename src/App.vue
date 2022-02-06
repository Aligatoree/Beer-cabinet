<template>
  <div id="app">
    <div class="nav">
      <div class="nav__beer">
        <router-link to="/" class="nav__beer_link">
          <img src="@/assets/logo.png" alt="logo" class="nav__logo" />
        </router-link>
      </div>
      <div class="nav__profile" v-if="isAuth">
        <router-link to="/profile" class="nav__profile_link">
          <p class="nav__profile_username">{{ username }}</p>
          <img :src="avatar" alt="" class="nav__profile_avatar" />
        </router-link>
      </div>
    </div>
    <router-view
      @rollbutton="newBeer"
      :beer-info="beerInfo"
      :user-info="userInfo"
      :link="avatar"
      :email="login.email"
      :password="login.password"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      beerInfo: {},
      userInfo: {},
      avatar: "",
      username: "",
      login: {
        email: "",
        password: "",
      },
      isAuth: "",
    };
  },
  mounted() {
    this.loadBeer();
    this.loadProfile();
  },
  updated() {
    this.isAuth = localStorage.getItem("isAuth");
  },
  methods: {
    loadBeer() {
      axios
        .get("https://random-data-api.com/api/beer/random_beer.json")
        .then((response) => {
          this.beerInfo = response.data;
          delete this.beerInfo.id;
          delete this.beerInfo.uid;
        })
        .catch((error) => console.log(error));
    },
    loadProfile() {
      let del = [
        "id",
        "uid",
        "avatar",
        "employment",
        "address",
        "credit_card",
        "subscription",
        "password",
        "email",
        "username",
      ];
      axios
        .get("https://random-data-api.com/api/users/random_user.json")
        .then((response) => {
          this.avatar = response.data.avatar;
          this.username = response.data.username;
          this.login.email = response.data.email;
          this.login.password = response.data.password;
          this.userInfo = response.data;
          for (let value in del) {
            delete this.userInfo[del[value]];
          }
        })
        .catch((error) => console.log(error));
    },
    newBeer() {
      this.loadBeer();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import "@/assets/scss/style.scss";
</style>
