<template>
  <form class="simple_form new_user" id="new_user">
    <h1 class="title">Sign in to Lucid.social.</h1>
    <p class="lead">
      Sign in with your lucid.social credentials. If your account is hosted on a
      different server, you will not be able to log in here.
    </p>
    <div class="fields-group">
      <div v-show="error" class="message">
        <strong>{{ error }}</strong>
      </div>
      <div class="input with_label email optional user_email">
        <div class="label_input">
          <label class="email optional">Username</label>
          <div class="label_input__wrapper">
            <input
              class="string optional"
              type="text"
              name="username"
              required
            />
          </div>
        </div>
      </div>
    </div>
    <div class="fields-group">
      <div class="input with_label password optional user_password">
        <div class="label_input">
          <label class="password optional">Password</label>
          <div class="label_input__wrapper">
            <input
              class="password optional"
              type="password"
              name="password"
              required
            />
          </div>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="btn" name="login">Sign in</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>
