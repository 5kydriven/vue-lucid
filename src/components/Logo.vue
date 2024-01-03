<template>
     <div class="logo-container">
            <h1>
                <a href="/">
                    <img src="../assets/lucidwhite.png">
                </a>
            </h1>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    /* logo */
.logo-container {
  margin: 50px auto;
}

.logo-container h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container h1 img {
  height: 150px;
  border-radius: 50px;
}

.logo-container h1 a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  outline: 0;
  padding: 12px 16px;
  line-height: 32px;
  font-weight: 500;
  font-size: 14px;
}
</style>