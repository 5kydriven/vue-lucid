<template>
  <div class="container-alt">
    <Logo />
    <div class="form-container">
      <Signin v-if="$route.path === '/signin'" />
      <Signup v-else />
      <Formfoot />
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Formfoot from "@/components/Formfoot.vue";
import Signin from "@/components/SigninForm.vue";
import Signup from "@/components/SignupForm.vue";

export default {
  components: {
    Logo,
    Formfoot,
    Signin,
    Signup,
  },
};
</script>

<style>
* {
    vertical-align: baseline;
    font-family: inherit;
    font-size: 100%;
}

body {
  font-family: "Roboto", sans-serif;
  background: #282c37;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  color: #fff;
  text-rendering: optimizelegibility;
  font-feature-settings: "kern";
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* form */
.form-container {
  max-width: 450px;
  padding: 20px 20px 50px;
  margin: 50px auto;
}

.simple_form .title {
  font-size: 28px;
  line-height: 33px;
  font-weight: 700;
  margin-bottom: 15px;
}

.simple_form .lead,
.simple_form .rules-list {
  font-size: 17px;
  line-height: 22px;
  margin-bottom: 20px;
}

.simple_form .lead {
  color: #d9e1e8;
}

.simple_form .fields-group {
  margin-bottom: 25px;
}

.simple_form .input {
  margin-bottom: 15px;
  overflow: hidden;
}

.simple_form .label_input__wrapper {
  position: relative;
}

.simple_form input[type="datetime-local"],
.simple_form input[type="email"],
.simple_form input[type="number"],
.simple_form input[type="password"],
.simple_form input[type="text"],
.simple_form input[type="url"],
.simple_form textarea {
  box-sizing: border-box;
  font-size: 16px;
  color: #fff;
  display: block;
  width: 100%;
  outline: 0;
  font-family: inherit;
  resize: vertical;
  background: #131419;
  border: 1px solid #0a0b0e;
  border-radius: 4px;
  padding: 10px;
}

.simple_form .input.with_label .label_input > label {
  font-family: inherit;
  font-size: 14px;
  color: #fff;
  display: block;
  margin-bottom: 8px;
  word-wrap: break-word;
  font-weight: 500;
}

/* button */
.simple_form .actions {
  margin-top: 15px;
  display: flex;
}

.simple_form .block-button,
.simple_form .button,
.simple_form button {
  display: block;
  width: 100%;
  border: 0;
  border-radius: 4px;
  background: #595aff;
  color: #fff;
  font-size: 18px;
  line-height: inherit;
  height: auto;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 500;
  outline: 0;
  margin-bottom: 10px;
  margin-right: 0px;
}

.simple_form .block-button,
.simple_form .button,
.simple_form button:hover {
  background: #6e6eff;
}

/* scroll design */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-corner {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
}

::-webkit-scrollbar-thumb {
  background: #313543;
  border: 0 #fff;
  border-radius: 50px;
}

::-webkit-scrollbar-track {
  border: 0 #fff;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

/* effects */
a:-webkit-any-link {
  cursor: pointer;
}

.simple_form input[type="email"]:focus {
  border: 1px solid #595aff;
}

.simple_form input[type="password"]:focus {
  border: 1px solid #595aff;
}

.simple_form input[type="text"]:focus {
  border: 1px solid #595aff;
}

/* error */
.message {
  max-width: 100%;
  border: 1px solid rgba(223, 64, 90, 0.5);
  background: rgba(223, 64, 90, 0.1);
  color: #df405a;
  padding: 15px 10px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 25px;
}
</style>
