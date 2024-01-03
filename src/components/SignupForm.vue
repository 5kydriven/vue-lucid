<template>
  
    <form
      class="simple_form new_user"
      id="new_user"
      @submit.prevent="handleSubmit"
    >
      <h1 class="title">Let's get you set up on Lucid.social.</h1>
      <p class="lead">
        With an account on this Lucid server, you'll be able to follow any other
        person on the network, regardless of where their account is hosted.
      </p>
      <div class="fields-group">
        <div class="message" v-show="error">
          <strong>{{ error }}</strong>
        </div>

        <div class="input with_label string optional user_account_display_name">
          <div class="label_input">
            <div class="label_input__wrapper">
              <input
                placeholder="Display name"
                class="string optional"
                type="text"
                v-model="displayName"
                required
              />
            </div>
          </div>
        </div>
        <div class="input with_label string optional user_account_username">
          <div class="label_input">
            <div class="label_input__wrapper">
              <input
                placeholder="Username"
                maxlength="30"
                class="string required"
                type="text"
                v-model="username"
                required
              />
            </div>
          </div>
        </div>
        <div class="input email required user_email">
          <input
            placeholder="E-mail address"
            class="string email required"
            type="email"
            v-model="email"
            required
          />
        </div>
        <div class="input password required user_password">
          <input
            placeholder="Password"
            maxlength="72"
            class="password required"
            type="password"
            v-model="password"
            required
          />
        </div>
        <div class="input string optional user_confirm_password">
          <input
            placeholder="Confirm password"
            class="string optional"
            type="password"
            v-model="confirmPass"
            required
          />
        </div>
      </div>

      <div class="actions">
        <button class="btn" name="signup">Sign up</button>
      </div>
    </form>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      displayName: "",
      username: "",
      password: "",
      confirmPass: "",
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        displayName: this.displayName,
        username: this.username,
        password: this.password,
        confirmPass: this.confirmPass,
      };
      console.log(data);
    },
  },
};
</script>
