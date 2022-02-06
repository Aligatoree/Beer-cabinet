<template>
  <div class="page">
    <h1>login</h1>
    <input
      v-model="inputEmail"
      type="text"
      placeholder="Email"
      class="page__email"
    />
    <input
      v-model="inputPassword"
      type="password"
      placeholder="Password"
      class="page__password"
    />
    <button class="page__button" @click="check">Continue</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
    };
  },
  props: ["email", "password"],
  updated() {
    this.inputEmail = this.email;
    this.inputPassword = this.password;
  },
  methods: {
    check() {
      if (this.email == this.inputEmail) {
        this.checked = true;
        localStorage.setItem("isAuth", "true");
        this.$router.push("/");
      } else {
        this.checked = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  box-shadow: #000 0 0 20px;
  input {
    width: 50%;
    height: 30px;
    border-radius: 10px;
    padding: 6px;
    margin: 10px;
    font-size: 16px;
  }
  &__button {
    width: 160px;
    height: 60px;
    border-radius: 15px;
    padding: 10px;
    margin: 15px 20px 15px 20px;
    @media (max-width: 768px) {
      width: 120px;
      height: 50px;
    }
  }
  @media (max-height: 768px) {
    margin-top: 2%;
    h1 {
      margin: 7px;
    }
  }
}
</style>
