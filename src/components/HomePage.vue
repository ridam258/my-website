<template>
    <the-header routeInfo = true class="header"></the-header>
    <div class="head">
        <div class="d-flex">
            <div style="width:50%;height:100vh;background-color:#101011;border-bottom: 8px solid #988345;"></div>
            <div style="width:50%;height:100vh;background-color:#151617;border-bottom: 8px solid #988345;"></div>
        </div>
        <div class="content">
            
            <div class="main-content">
                <img class="centerlogo" src="../assets/centerlogo1.png" alt="">
                <h1>Ridam Jain</h1>
                <img style="width:50px;border:2px white solid" src="../assets/minus.png
                " alt="">
                <h3>Developer + Programmer</h3>
            </div>
            <div class="footer" style="text-align:center">
                <router-link to="/about"><img style="width:50px" src="../assets/go.png" alt=""></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import TheHeader from './TheHeader.vue'
export default {
    components:{
        TheHeader
    }
}
</script>
<style scoped>
    .header{
        position: absolute;
        top: 0;
        z-index: 1;
        width: 100%;
    }
    .head{
        position: relative;
        /*  */
    }
    .content{
        position: absolute;
        top: 0;
        width: 100%;
    }
    
.main-content{
    text-align: center;
    margin-top: 10rem;
}
.main-content h1{
    font-size: 80px;
    font-weight: 600;
    color: #988345;
    padding: 0rem 0 1rem;
    margin: 0;
}
.main-content h3{
    font-size: 30px;
    color: white;
    font-weight: 500;
    padding: 1rem 0 0rem 0rem;
}
.footer img{
    margin-top: 5rem;
    border: 2px solid white;
    border-radius: 100%;
    padding: 5px;
}
.centerlogo{
    width: 120px;
}
@media screen and (max-width: 500px) {
  
  .main-content h1{
    font-size: 50px;
    font-weight: 600;
    color: #988345;
    padding: 0rem 0 1rem;
    margin: 0;
    }
    .main-content h3{
        font-size: 22px;
        font-weight: 500;
        padding: 1rem 0 0rem 1rem;
    }
    .sidenav a {
        font-size: 20px;
    }
    .options a {
        border-bottom: 2px solid #988345;
    }
    .sidenav p{
        font-size: 12px;
    }
}
</style>