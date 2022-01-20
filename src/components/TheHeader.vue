<template>
    <div class="header d-flex justify-content-between align-items-center">
                <!-- <img src="../assets/headerlogo1.jpg" alt=""> -->
                <h4 class="m-0" :class="{'white':routeInfo,'black':!routeInfo}">Ridam <span style="padding:0;color:#988345">Jain</span></h4>
                <div class="menu">
                    <span class="d-none d-sm-block" :class="{'white':routeInfo,'black':!routeInfo}" style="font-size:20px;cursor:pointer" @click="openNav()">Menu &#9776;</span>
                    <span class="d-block d-sm-none " :class="{'white':routeInfo,'black':!routeInfo}" style="font-size:20px;cursor:pointer" @click="openNav()">&#9776;</span>
                    <div id="mySidenav" class="sidenav d-flex flex-column justify-content-between" :class="{'maxWidth':flag==true,'minWidth':!flag}">
                        <div class="d-flex align-items-center justify-content-between close">
                            <h4 class="m-0 p-0" style="color:white">Ridam <span style="padding:0;color:#988345">Jain</span></h4>
                            <a href="javascript:void(0)" class="closebtnm-0" @click="closeNav()">&times;</a>
                        </div>
                        <div class="options">
                            <h5><router-link @click="closeNav()" to="/home">Home</router-link></h5>
                            <h5 ><router-link @click="closeNav()" to="/about">About</router-link></h5>
                            <h5><router-link @click="closeNav()" to="/home">Projects</router-link></h5>
                            <h5><router-link @click="closeNav()" to="/home">Contact</router-link></h5>
                            
                        </div>
                        <p>© 2022 Ridam Jain.</p>
                    </div>

                </div>
            </div>
</template>
<script>
export default {
    data(){
        return{
            flag:false,
        }
    },
    methods:{
        openNav(){
            console.log(this.flag);
            
            this.flag = true;
        },
        closeNav(){
            console.log(this.flag);
            this.flag = false;
        }
    },
    created(){
        console.log(this.$route);
    },
    props:['routeInfo']
}
</script>

<style scoped>
span{
        padding: 0 2rem;
font-family: 'Roboto Slab', serif;
    }
    .white{
        color: white;
    }
    .black{
        color: black;
    }
    span:hover{
        color: #988345;
    }
    .header{
        margin: 2rem 0;
    }
    .header h4{
        font-family: 'Roboto Slab', serif;
        /* color: white; */
        padding: 0 2rem;
    }
    .maxWidth{
        width: 100%;
    }
    .minWidth{
        width: 0%;
    }
    .sidenav {
        height: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }
    a.router-link-active.router-link-exact-active{
        color: #988345;
    }
    h5{
        /* color: white; */
    }
    .sidenav a {
        /* padding: 8px 16px 16px 32px; */
        text-decoration: none;
        font-size: 48px;
        color: white;
        display: block;
        transition: 0.3s;
        font-weight: 600;
    }
    .sidenav p {
        color: white;
        margin: 2rem;
        font-size: 20px;
    }
    .options h5 {
        /* border-bottom: 5px solid #98834585; */
        margin: 1rem 2rem 1rem 2rem;
        padding: 8px 8px 16px 0px;
        /* padding: 8px 16px 16px 32px; */
    }
    .options a::after{
            
        content: "";
        display: block;
        width: 0.75em;
        height: 0.125em;
        margin: 0.3em 0 0 0;
        background: #b3b9c0;

    }
    .options h5::after{
        content: "";
        display: block;
        position: relative;
        top: -0.0625em;
        right: 0em;
        height: 0.0625em;
        /* width: 0%; */
        background: #2f3133;
    }
    .sidenav a:hover {
        color: #988345;
    }

    .sidenav .closebtn {
        /* position: absolute;
        top: 0;
        right: 25px; */
        font-size: 50px;
        /* margin-left: 50px; */
    }
    .close{
        /* margin: 0 2rem; */
        padding: 0 2rem ;
        position: absolute;
        width: 100%;
        top: 0;
    }
    .options{
        margin-top: 2rem;
        /* margin-left: 2rem; */
    }
@media screen and (max-width: 500px) {
  .header{
      font-size: 20px;
      margin: 1rem 0;
  }
  .header h4{
      font-size: 15px;
  }
  .centerlogo{
      width: 80px;
  }
  .sidenav a {
      font-size: 32px;
  }
  
}
</style>