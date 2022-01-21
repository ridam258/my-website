<template>
    <the-header :routeInfo="false" class="header"></the-header>
    <div class="head">
        <div class="d-flex justify-content-center inner">
            <img :src="imglink" alt="">
            <div class="outer"></div>
            <div class="d-flex justify-content-center label">
                <a style="text-decoration:none" :href="data.link"><h1>{{data.name}}</h1></a>
            </div>
        </div>
            <div class="content techstack">
                <div class="">
                    <h2>Tech stack</h2>
                    <div class="d-flex justify-content-center techhead">
                        <h5 class="techs d-flex" v-for="t in data.tech" :key="t">{{t}}</h5>
                    </div>
                </div>
            </div>
                <div class="description">
                    <h2>Project Details</h2>
                    <p>{{data.description}}</p>
                    <button><a style="color:black; text-decoration:none" :href="data.link">View Live</a></button>
                </div>
    </div>
</template>
<script>
import TheHeader from './TheHeader.vue'
export default {
    data(){
        return{
            idx:0,
            data:[],
            imglink:""
        }
    },
    methods:{
        getDetails(){
            const r = this.$route.params.id;
            this.idx = r;
            this.data = this.$store.state.projects[r];
            this.imglink = require(`../assets/${r}.png`)
        }
    },
    props:['index'],
    created(){
        this.getDetails();
    },
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
        padding: 5rem 0 1rem;
        width: 100%;
    }
    .head img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
        filter: blur(2px);
        /* margin: 5rem auto 0rem; */
        /* margin: 0 5rem; */
    }
    .head h3{
        margin: 10px 2rem;
        font-size: 24px;
    }
    .content h1{
        /* margin: 10px 2rem; */
        font-weight: 700;
    }
    .content h2{
        /* margin: 10px; */
        text-align: center;
    }
    .techs{
        font-size: 22px;
        font-weight: 600;
        margin: 10px 2rem;
        /* margin-left: 4rem; */
    }
    .inner{
        position: relative;
        /* margin: 0 4rem; */
    }
    .outer{
        position: absolute;
        bottom: 0;
        left: 0;
        /* margin: 0 4rem; */
        /* background-color: rgba(0, 0, 0, 0.726); */
        width: 100%;
        height: 100%;
        background-color: #000;
        /* background-image: url(); */
        /* filter: blur(10000000px); */
        opacity: 0.5;
    }
    .label{
        position: absolute;
        bottom: 0;
        color: #988345;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        /* margin: 0 4rem; */
    }
    .label h1{
        cursor: pointer;
        font-weight: 700;
        font-size: 64px;
        padding: 2rem 0rem;
        text-align: center;
        color: white;
    }
    .label h1:hover{
        color: #988345;
    }
    .techstack{
        background: #dbdad4;
        padding: 1rem 0;
    }
    .techstack h2, .techstack h5{
        font-weight: 700;
    }
    .description{
        text-align: center;
        margin: 2rem 0;
        background-color: #EFEEEA;
    }
    .description p {
        font-size: 20px;
        width: 80%;
        margin: 0 auto;
    }
    .description button{
        padding: .4rem 2rem;
        border: 0px;
        border-radius: 12px;
        background-color: #988345;
        margin: 2rem 0 0;
        font-size: 1.2rem;
        font-weight: 600;
    }
    .techhead{
        flex-wrap: wrap;
    }
@media screen and (max-width: 500px) {
    .label h1{
        font-size: 32px;
    }
    .techs{
        margin: 5px 1rem;
        font-size: 18px;
    }
    .description p {
        font-size: 16px;
    }
    .description h2{
        font-weight: 700;
    }
}
    /*  */
</style>