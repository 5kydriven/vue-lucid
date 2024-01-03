<template>
    <div id="page-container">
        <Header></Header>
        <!-- Body -->
        <div id="body" >
            <div class="container">
                <h2 class="introtitle">Elevate the global conversation</h2>
                <p class="intro">Lucids is an open source social network dedicated to Internet freedom. Speak freely, protect your privacy, earn crypto rewards and take back control of your social media.</p>
                <a href="/signup"><button id="joinbtn">Join Lucid Now</button></a>
            </div>
        </div>
        <!-- Footer -->
        <center>
            <Footer></Footer>
        </center>
    </div>

</template>

<script>
    import Header from '@/components/homepage/Header.vue'
    import Footer from '@/components/homepage/Footer.vue'
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style>

#page-container{
    background-image: url(../assets/neural.png);
    line-height: 20px;
    font-family: 'Roboto', sans-serif;
    height: auto;
}

/* body */
#body{
    display: flex;
    flex-direction: row;
    max-width: 100%;
    overflow: hidden;
    justify-content: flex-start;
    padding: 5em 0 0 10%;
    z-index: 1;
    
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    max-width: 100%;
}

.introtitle{
    color: rgb(255, 255, 255);
    font-size: 48px;
    line-height: 50px;
    font-family: 'Roboto', 'Helvitica', sans-serif;
    margin: 24px 0;
}
.intro{
    color: #fffc;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 650;
    max-width: 550px;
    word-wrap: break-word;
    margin: 0 0 16px;
    font-family: sans-serif;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
#joinbtn{
    font-family: 'Roboto', sans-serif;
    color: rgb(255, 255, 255);
    background-color: #1a7cf3;
    border: 1px solid #1a7cf3;
    font-weight: 500;
    cursor: pointer;
    font-size: 20px;
    padding: 15px 25px;
    border-radius: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
}

#joinbtn:hover{
    background-color: #1961b9;
}
</style>