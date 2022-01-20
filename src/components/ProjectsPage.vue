<template>
    <the-header :routeInfo="false" class="header"></the-header>
    <div class="head">
        <h1>My Projects</h1>
        <div class="d-flex justify-content-around gridhead">
            <div class="inner">
                <img style="width:100%" src="../assets/crypto.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>CrptoPrognostic</h2>
                </div>
            </div>
            <div class="inner">
                <img style="width:100%" src="../assets/book.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>Bookbin</h2>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-around gridhead">
            <div class="inner">
                <img style="width:100%" src="../assets/umesh.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>Client Portfolio</h2>
                </div>
            </div>
            <div class="inner">
                <img style="width:100%" src="../assets/mynotes.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>My Notes</h2>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-around gridhead">
            <div class="inner">
                <img style="width:100%" src="../assets/apihub.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>Api Hub</h2>
                </div>
            </div>
            <div class="inner">
                <img style="width:100%" src="../assets/terminalwar.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>Terminal War</h2>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-around gridhead mb-0">
            <div class="inner">
                <img style="width:100%" src="../assets/rock.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>Scissor Game</h2>
                </div>
            </div>
            <div class="inner mb-0">
                <img style="width:100%" src="../assets/unitconvertor.png" alt="">
                <div class="outer"></div>
                <div class="label">
                    <h2>Unit Convertor</h2>
                </div>
            </div>
        </div>
        <div class="last d-flex justify-content-between" style="background-color:black;color:white">
            <h5>© 2022 Ridam Jain.</h5>
            <h5>Want to connect? Ping me <a style="color:white" href="mailto:ridam258@gmail.com">here!</a></h5>
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
        background-color: #EFEEEA;
        /* height: 100vh; */
    }
    .head h1{
        padding: 8rem 0 2rem;
        text-align: center;
        font-size: 48px;
        font-weight: 700;
    }
    .gridhead{
        margin: 3rem 8rem;
        /* height: 100vh; */
    }
    .inner{
        position: relative;
        margin: 0 3rem;
        transition: transform .8s;
        cursor: pointer;
    }
    .inner:hover{
        transform: scale(1.1);
    }
    .inner img{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    .outer{
        position: absolute;
        background-color: rgba(0, 0, 0, 0.76);
        width: 100%;
        height: 20%;
        bottom: 0;
    }
    .label{
        position: absolute;
        bottom: 0;
        color: white;
        left: 0;
        width: 100%;
        height: 20%;
        display: flex;
        /* justify-content: center; */
        align-items: center;
    }
    .label h2{
        font-weight: 700;
        font-size: 40px;
        padding: 0 15px;
    }
    .last{
    margin-top: 4rem;
    padding: 1rem 3rem;
}
@media screen and (max-width: 1100px) {
    .gridhead{
        flex-direction: column;
        align-items: center;
        margin: 3rem 5rem;
    }
    .gridhead h2{
        font-size: 2rem;
    }
    .label{
        /* height: 15%; */
    }
    .inner{
        /* padding: 2rem 0; */
        margin: 3rem 0;
    }
}
@media screen and (max-width: 500px) {
    .head h1{
        padding: 5rem 0 0rem;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
    }
    .gridhead{
        margin: 0rem 2rem;
    }
    .gridhead h2{
        font-size: 1.3rem;
    }
    .inner{
        margin: 1rem;
    }
    .head{
        /* padding-bottom: 5rem; */
    }
    .last{
        padding: 1rem;
        /* font-size: 6px; */
    }
    .last h5{
        font-size: 12px;
    }
}
</style>