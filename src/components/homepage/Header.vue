<template>
  <div id="header">
    <h1 id="logo">{{ siteName }}</h1>
    <nav>
      <ul class="menu">
        <li id="login"><a id="lmodal" :href="loginUrl">Login</a></li>
        <li id="join"><a id="jmodal" :href="signupUrl">Join Now</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteName: "Lucid",
      loginUrl: "/signin",
      signupUrl: "/signup",
    };
  },
};
</script>

<style>
/* Navigation bar */
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
}

#header h1 {
  cursor: pointer;
  font-weight: bold;
  color: #fff;
}

li,
a {
  text-decoration: none;
}

nav {
  list-style: none;
}

nav li {
  display: inline-block;
  padding: 0px 20px;
}

nav li a {
  transition: all 0.3s ease 0s;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  color: #fff;
}

#login a,
#join a {
  padding: 10px 20px;
  border-radius: 20px;
}

#login a:hover {
  background-color: white;
  border-radius: 20px;
  color: grey;
}

#join a {
  border: 1px solid #1a7cf3;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

#join a:hover {
  background-color: #1961b9;
}
</style>
