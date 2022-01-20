<template>
    <the-header :routeInfo="false" :active="2" class="header"></the-header>
    <div class="head">
        <div class="image d-flex justify-content-center">
            <img src="../assets/ridam3.jpg" alt="">
        </div>
        <div class="main-content">
            <h1>HEY THERE, I'M RIDAM - A DEVELOPER WHO LOVES PROGRAMMING.</h1>
            <img src="../assets/yellowMinus.png" alt="">
            <h5>As an art director, designer and front-end developer, I have been building interactive experiences, creating brands and designing print materials for over eight years. I’m a fan of structure and simplicity in both design and code; organization and consistency are very important to me.
                <br><br> A few of my strengths are creative concept and strategy development, art direction, creative direction, UI/UX design, front-end development, typography, and bridging communication between developers and designers.
                <br><br> I find inspiration in nature, architecture, vintage fashion, indie electronica, science fiction and good lattes. When I’m not working, you can find me at a local coffee house, exploring indie art fairs, kickboxing, or even enjoying an old-fashioned cocktail.</h5>
            <div class="footer">
                <h1 class="my-5 text-center">My Experiences</h1>
                <div class="d-flex justify-content-between">
                    <div class="experience">
                        <h3>
                            <span>Brandvalley Technologies Pvt. Ltd.</span>
                        </h3>
                        <h5>Technologies: HTML, CSS, Bootstrap, Javascript</h5>
                        <h5>Duration: 21 July to 21 October</h5>
                        <p>
                            Learned how to work in a team environment, how to tackle problems and tasks given and how to always give my 120% to solve every problem standing between me and my goal.
                        </p>
                    </div>
                    <div class="experience">
                        <h3>
                            <span>The Urban Tech</span>
                        </h3>
                        <h5>Technologies: Vue Js, HTML, CSS, Bootstrap</h5>
                        <h5>Duration: Nov 2021 - Present</h5>
                        <p>
                            Learned and explore various aspects of front end and website development, also learned how to communicate with clients and fulfil the needs.
                        </p>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="experience">
                        <h3>
                            <span>Prayas - An sports event</span>
                        </h3>
                        <h5>Worked as a lead</h5>
                        <h5>Duration: Feb 2019</h5>
                        <p>
                            Learned management skills, hosted prayas our hostel sports event as a team with footfall of over 3000 players of more than 7 games for continuously three days.
                        </p>
                    </div>
                    <div class="experience">
                        <h3>
                            <span>NerdHerd Community</span>
                        </h3>
                        <h5>Worked as a lead</h5>
                        <h5>Duration: Aug 2019 - Present</h5>
                        <p>
                            Learned to manage people, as a team hosted an event "14 days of code" which was participated by more than 200 students from different colleges.
                        </p>
                    </div>
                </div>
            </div>
            <h1 class="my-5">My Skills</h1>
            <div class="skills">
                <div class="d-flex justify-content-between mb-5" style="flex-wrap:wrap">
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill nineeight':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/html.png" alt="">  
                                    <p>98%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">HTML</h3>
                            <p></p>
                        </div>
                    </div>
                    
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill nineeight':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/css.png" alt="">  
                                    <p>98%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">CSS</h3>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill nineeight':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/js.png" alt="">  
                                    <p>98%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">Javascript</h3>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill nineeight':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/vue.png" alt="">  
                                    <p>98%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">Vue Js</h3>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill ninety':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/node.png" alt="">  
                                    <p>90%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">Node Js</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-5" style="flex-wrap:wrap">
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill ninety':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/cpp.png" alt="">  
                                    <p>90%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">C++</h3>
                            <p></p>
                        </div>
                    </div>
                    
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill eighty':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/java.png" alt="">  
                                    <p>80%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">Java</h3>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill eightyfive':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/sql.png" alt="">  
                                    <p>85%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">SQL</h3>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill nineeight':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/git.png" alt="">  
                                    <p>98%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">Github</h3>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div :class="{'fill nineeight':skills}"></div>
                                </div>
                                <div class="mask half">
                                    <div :class="{'fill left':skills}"></div>
                                </div>
                                <div class="inside-circle"> 
                                    <img src="../assets/boot.png" alt="">  
                                    <p>98%</p>  
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="my-2">Bootstrap</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        
    </div>
</template>
<script>
import TheHeader from './TheHeader.vue'
export default {
    data(){
        return{
            skills:false
        }
    },
    components:{
        TheHeader
    },
    methods:{
        scrollGet(){
            console.log(window.scrollY);
            console.log('hi');
            
        }

    },
    created(){
        window.addEventListener('scroll',()=>{
            if(window.scrollY>1230){
                this.skills=true;
            }
            else{
                this.skills=false;
            }
            
        });
    },
    watch:{
        scrollPos(value){
            console.log(value);
            
        }
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
    }
    .image img{
        width: 220px;
        border: 0px;
        border-radius: 100%;
        margin: 0 auto;
    }
    .image{
        padding-top: 10rem;
    }
    .main-content{
        color: black;
        text-align: center;
        padding: 2rem 12rem;
        /* margin: 2rem 0; */
    }
    .main-content h1{
        font-size: 48px;
        font-weight: 700;
    }
    .main-content h5{
        line-height: 2rem;
    }
    .footer{
        text-align: left;
    }
    
    .footer span::after{
         
    content: "";
    display: block;
    margin: 0.2em 0 0 0;
    width: 2em;
    height: 0.3em;
    background: #988345;

    }
    .footer h3::after{
        width: 70%;
        content: "";
    display: block;
    position: relative;
    top: -0.15em;
    right: -2.5em;
    height: 0.15em;background: #b3b9c0;
    }
    .experience{
        width: 45%;
        /* margin: 0 2rem; */
    }
    .experience h3{
        margin: 1rem 0;
        font-weight: 700;
    }
    .experience h5{
        margin: 0;
    }
    .skills{
        position: relative;
        /* height: 50vh; */
    }
    .circle-wrap {
  /* margin: 150px auto; */
  width: 150px;
  height: 150px;
  background: #fefcff;
  border-radius: 50%;
  border: 1px solid #cdcbd0;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0px, 150px, 150px, 75px);
}

.circle-wrap .inside-circle {
  width: 122px;
  height: 122px;
  border-radius: 50%;
  background: #f5edd7;
  /* line-height: 60px; */
  text-align: center;
  margin-top: 14px;
  margin-left: 14px;
  color: #988345;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 1.7em;
  padding-top: 15px;
}

/* color animation */

/* 3rd progress bar */
.mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #988345;
}

/* .mask.full,
.circle .eightyhalf {
  animation: eighty ease-in-out 2s;
  transform: rotate(180deg);
} */
.mask.full,
.circle .eighty {
  animation:  2s ease-in-out;
  animation-name: eighty;
  transform: rotate(144deg);
}
@keyframes eighty{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(144deg);
  }
}
.mask.full,
.circle .left {
  animation:  2s ease-in-out;
  animation-name: left;
  transform: rotate(180deg);
}
@keyframes left{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.mask.full,
.circle .nineeight {
  animation: fill ease-in-out 2s;
  transform: rotate(176deg);
}

@keyframes fill{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(176deg);
  }
}
.mask.full,
.circle .ninety {
  animation: ease-in-out 2s;
  animation-name: ninety;
  transform: rotate(162deg);
}

@keyframes ninety{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(162deg);
  }
}
.mask.full,
.circle .eightyfive {
  animation: ease-in-out 2s;
  animation-name: eightyfive;
  transform: rotate(153deg);
}

@keyframes eightyfive{
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(153deg);
  }
}

</style>