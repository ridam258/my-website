<template>
    <div class="head">
        <div class="d-flex">
            <div style="width:50%;height:100vh;background-color:#101011;border-bottom: 8px solid #988345;"></div>
            <div style="width:50%;height:100vh;background-color:#151617;border-bottom: 8px solid #988345;"></div>
        </div>
        <div class="content">
            <div class="header d-flex justify-content-between align-items-center">
                <!-- <img src="../assets/headerlogo1.jpg" alt=""> -->
                <h4 class="m-0">Ridam <span style="padding:0;color:#988345">Jain</span></h4>
                <div class="menu">
                    <span class="d-none d-sm-block" style="font-size:20px;cursor:pointer" @click="openNav()">Menu &#9776;</span>
                    <span class="d-block d-sm-none " style="font-size:20px;cursor:pointer" @click="openNav()">&#9776;</span>
                    <div id="mySidenav" class="sidenav d-flex flex-column justify-content-between" :class="{'maxWidth':flag==true,'minWidth':!flag}">
                        <div class="d-flex align-items-center justify-content-between close">
                            <h4 class="m-0">Ridam <span style="padding:0;color:#988345">Jain</span></h4>
                            <a href="javascript:void(0)" class="closebtnm-0" @click="closeNav()">&times;</a>
                        </div>
                        <div class="options">
                            <a href="#">About</a>
                            <a href="#">Projects</a>
                            <a href="#">Contact</a>
                        </div>
                        <p>© 2022 Ridam Jain.</p>
                    </div>

                </div>
            </div>
            <div class="main-content">
                <img class="centerlogo" src="../assets/centerlogo1.png" alt="">
                <h1>Ridam Jain</h1>
                <img style="width:50px;border:2px white solid" src="../assets/minus.png
                " alt="">
                <h3>Developer + Programmer</h3>
            </div>
            <div class="footer" style="text-align:center">
                <img style="width:50px" src="../assets/go.png" alt="">
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
    }
}
</script>
<style scoped>
    .head{
        position: relative;
        /*  */
    }
    .content{
        position: absolute;
        top: 0;
        width: 100%;
    }
    span{
        color: white;
        padding: 0 2rem;
        font-family: 'Playfair Display', serif;
    }
    span:hover{
        color: #988345;
    }
    .header{
        margin: 2rem 0;
    }
    .header h4{
        font-family: 'Playfair Display', serif;
        color: white;
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

.sidenav a {
  padding: 8px 16px 16px 32px;
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
.options a {
  border-bottom: 5px solid #98834585;
  margin: 2rem 2rem 2rem 2rem;
  padding: 8px 8px 16px 0px;

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
    position: absolute;
    width: 100%;
    top: 0;
}
.options{
    margin-top: 5rem;
    /* margin-left: 2rem; */
}
.main-content{
    text-align: center;
    margin-top: 6rem;
}
.main-content h1{
    font-size: 80px;
    font-weight: 600;
    color: #988345;
    padding: 0rem 0 1rem;
    margin: 0;
}
.main-content h3{
    font-size: 40px;
    color: white;
    font-weight: 500;
    padding: 1rem 0 0rem 2rem;
}
.footer img{
    margin-top: 6rem;
    border: 2px solid white;
    border-radius: 100%;
    padding: 5px;
}
.centerlogo{
    width: 120px;
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
  .main-content{
      margin-top: 5rem;
  }
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