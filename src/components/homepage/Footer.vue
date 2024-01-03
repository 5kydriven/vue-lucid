<template>
  <!-- Footer -->
  <div id="foot" class="footer-styles">
    <div v-for="item in items" :key="item.id" class="item">
      <span class="title">{{ item.title }}</span>
      <span class="subtitle">{{ item.subtitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, title: '6M+', subtitle: 'Members' },
        { id: 2, title: '8M+', subtitle: 'Conversations' },
        { id: 3, title: '5M+', subtitle: 'Tokens Rewarded' },
        { id: 4, title: '2B+', subtitle: 'Boosted Views' },
      ],
    };
  },
};
</script>

<style>
/* footer */
#foot{
    display: flex;
    flex-direction: row;
    border-top: 1px solid rgba(255,255,255,.4);
    width: 80%;
    margin-top: 89px;
}

.item{
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: calc(var(--vh, 1vh) * 3) 8px; 
}

.title{
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    color: #fff;
}

.subtitle{
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: #ffffff80;
    font-family: sans-serif;
}
</style>
