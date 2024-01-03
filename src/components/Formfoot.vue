<template>
    <div v-if="isRouteMatch('/signin')" class="form-footer">
        <ul class="no-list">
            <li><a href="/signup">Sign up</a></li>
            <li><a href="#">Forgot your password?</a></li>
            <li><a href="#">Didn't recieve instructions?</a></li>
        </ul>
    </div>

    <div v-else class="form-footer">
        <ul class="no-list">
          <li><a href="/signin">Sign in</a></li>
          <li><a href="#">Didn't recieve instructions?</a></li>
        </ul>
      </div>
</template>

<script>
    export default {
        methods: {
            isRouteMatch(path) {
                return this.$route.path === path;
            }
        }
    }
</script>

<style>
    /* footer */
  .form-footer {
    margin-top: 30px;
    text-align: center;
  }
  
  .no-list {
    list-style: none;
  }
  
  .no-list li {
    display: inline-block;
    margin: 0 5px;
  }
  
  .form-footer a {
    color: #9baec8;
    text-decoration: none;
  }
  
  .form-footer a:hover {
    text-decoration: underline;
  }
</style>