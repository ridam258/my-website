<template>
  <the-header :routeInfo="false" class="header"></the-header>
  <div class="head">
    <div class="image d-flex justify-content-center">
      <img src="../assets/ridam33.jpg" alt="" />
    </div>
    <div class="main-content">
      <h1>HEY THERE, I'M RIDAM - A DEVELOPER WHO LOVES PROGRAMMING.</h1>
      <div class="dash"></div>
      <h5>
        Here is a special greeting for all the delightful viewers from me, Ridam
        Jain. I am currently pursuing M.Tech from International Institute of
        Professional Studies, DAVV in Information Technology. I am a fledgling
        web developer who loves to design and make stunning websites. Having a
        handful of experience in working with Vue.js, I have bunched up my
        skillset which includes backend developing technologies as well.
        <br /><br />
        Along with that, I have enhanced my active knowledge of SQL, Cpp, and
        Java. With this all said, I am a vibrant coder who adores spending time
        in CPP. <br /><br />
        Without missing any opportunity, I have managed many events as a lead. I
        always wish to have a platform where I can showcase my skills, give my
        100%, and learn every day! Last but not least, a cup of tea is always
        welcome!
      </h5>
      <div class="footer">
        <h1 class="text-center">My Experiences</h1>
        <div class="experienceflex d-flex justify-content-between">
          <div class="experience">
            <h3>
              <span>Brandvalley Technologies Pvt. Ltd.</span>
            </h3>
            <h5>Technologies: HTML, CSS, Bootstrap, Javascript</h5>
            <h5>Duration: 21 July to 21 October</h5>
            <p>
              Learned how to work in a team environment, how to tackle problems
              and tasks given and how to always give my 120% to solve every
              problem standing between me and my goal.
            </p>
          </div>
          <div class="experience">
            <h3>
              <span>The Urban Tech</span>
            </h3>
            <h5>Technologies: Vue Js, HTML, CSS, Bootstrap</h5>
            <h5>Duration: Nov 2021 - Present</h5>
            <p>
              Learned and explore various aspects of front end and website
              development, also learned how to communicate with clients and
              fulfil the needs.
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-between experienceflex">
          <div class="experience">
            <h3>
              <span>Prayas - An sports event</span>
            </h3>
            <h5>Worked as a lead</h5>
            <h5>Duration: Feb 2019</h5>
            <p>
              Learned management skills, hosted prayas our hostel sports event
              as a team with footfall of over 3000 players of more than 7 games
              for continuously three days.
            </p>
          </div>
          <div class="experience">
            <h3>
              <span>NerdHerd Community</span>
            </h3>
            <h5>Worked as a lead</h5>
            <h5>Duration: Aug 2019 - Present</h5>
            <p>
              Learned to manage people, as a team hosted an event "14 days of
              code" which was participated by more than 200 students from
              different colleges.
            </p>
          </div>
        </div>
      </div>
      <div class="skills">
        <h1>My Skills</h1>
        <div class="d-flex justify-content-between mb-5 experienceflex">
          <div>
            <div class="circle-wrap">
              <div class="circle">
                <div class="mask full">
                  <div :class="{ 'fill nineeight': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/html.png" alt="" />
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
                  <div :class="{ 'fill nineeight': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/css.png" alt="" />
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
                  <div :class="{ 'fill nineeight': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/js.png" alt="" />
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
                  <div :class="{ 'fill nineeight': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/vue.png" alt="" />
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
                  <div :class="{ 'fill ninety': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/node.png" alt="" />
                </div>
              </div>
            </div>
            <div>
              <h3 class="my-2">Node Js</h3>
              <p></p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-5 experienceflex">
          <div>
            <div class="circle-wrap">
              <div class="circle">
                <div class="mask full">
                  <div :class="{ 'fill ninety': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/cpp.png" alt="" />
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
                  <div :class="{ 'fill eighty': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/java.png" alt="" />
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
                  <div :class="{ 'fill eightyfive': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/sql.png" alt="" />
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
                  <div :class="{ 'fill ninety': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/firebase.png" alt="" />
                </div>
              </div>
            </div>
            <div>
              <h3 class="my-2">Firebase</h3>
              <p></p>
            </div>
          </div>
          <div>
            <div class="circle-wrap">
              <div class="circle">
                <div class="mask full">
                  <div :class="{ 'fill nineeight': skills }"></div>
                </div>
                <div class="mask half">
                  <div :class="{ 'fill left': skills }"></div>
                </div>
                <div class="inside-circle">
                  <img src="../assets/boot.png" alt="" />
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
    <div
      class="last d-flex justify-content-between"
      style="background-color: #988345; color: black"
    >
      <h5>© 2022 Ridam Jain.</h5>
      <h5>
        Want to connect? Ping me
        <a style="color: black" href="mailto:ridam258@gmail.com">here!</a>
      </h5>
    </div>
  </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
export default {
  data() {
    return {
      skills: false,
    };
  },
  components: {
    TheHeader,
  },
  methods: {
    scrollGet() {
      console.log(window.scrollY);
      console.log("hi");
    },
  },
  created() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1230) {
        this.skills = true;
      } else {
        this.skills = false;
      }
    });
  },
  watch: {
    scrollPos(value) {
      console.log(value);
    },
  },
};
</script>
<style scoped>
.dash {
  height: 10px;
  width: 50px;
  background-color: #988345;
  margin: 15px auto;
}
.header {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
}
.head {
  background-color: #efeeea;
}
.image img {
  width: 220px;
  border: 0px;
  border-radius: 100%;
  margin: 0 auto;
}
.image {
  padding-top: 10rem;
}
.main-content {
  color: black;
  text-align: center;
  padding: 2rem 12rem;
  /* margin: 2rem 0; */
}
.main-content h1 {
  font-size: 48px;
  font-weight: 700;
}
.main-content h5 {
  text-align: left;
  line-height: 2rem;
}
.footer {
  text-align: left;
}
.footer h1 {
  margin: 5rem 0;
}
.footer span::after {
  content: "";
  display: block;
  margin: 0.2em 0 0 0;
  width: 2em;
  height: 0.3em;
  background: #988345;
}
.footer h3::after {
  width: 70%;
  content: "";
  display: block;
  position: relative;
  top: -0.15em;
  right: -2.5em;
  height: 0.15em;
  background: #b3b9c0;
}
.experience {
  width: 45%;
  /* margin: 0 2rem; */
}
.experience h3 {
  margin: 1rem 0;
  font-weight: 700;
}
.experience h5 {
  margin: 0;
}
.skills {
  position: relative;
  /* height: 50vh; */
}
.skills h1 {
  margin: 5rem 0;
}
.circle-wrap {
  margin: 0px auto;
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
  /* line-height: 120px; */
  text-align: center;
  margin-top: 14px;
  margin-left: 14px;
  color: #988345;
  position: absolute;
  z-index: 100;
  font-weight: 700;
  font-size: 1.7em;
  padding-top: 31px;
}

/* color animation */

/* 3rd progress bar */
.mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: #988345;
}
.skills img {
  width: 60px;
}

/* .mask.full,
.circle .eightyhalf {
  animation: eighty ease-in-out 2s;
  transform: rotate(180deg);
} */
.mask.full,
.circle .eighty {
  animation: 2s ease-in-out;
  animation-name: eighty;
  transform: rotate(144deg);
}

@keyframes eighty {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(144deg);
  }
}
.mask.full,
.circle .left {
  animation: 2s ease-in-out;
  animation-name: left;
  transform: rotate(180deg);
}
@keyframes left {
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
  transform: rotate(178deg);
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(178deg);
  }
}
.mask.full,
.circle .ninety {
  animation: ease-in-out 2s;
  animation-name: ninety;
  transform: rotate(162deg);
}

@keyframes ninety {
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

@keyframes eightyfive {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(153deg);
  }
}
.last {
  margin-top: 2rem;
  padding: 1rem 3rem;
}
@media screen and (max-width: 768px) {
  .main-content {
    padding: 2rem 5rem;
  }
}
@media screen and (max-width: 500px) {
  .image {
    padding-top: 6rem;
  }
  .main-content {
    padding: 2rem;
  }
  .image img {
    width: 120px;
    border: 0px;
    border-radius: 100%;
    margin: 0 auto;
  }
  .image {
    /* padding-top: 10rem; */
  }
  .main-content h1 {
    font-size: 24px;
    font-weight: 700;
  }
  .main-content h5 {
    line-height: 1.3rem;
    font-size: 16px;
  }
  .footer h1 {
    margin: 2rem 0;
  }
  .experience h3 {
    /* margin: 1rem 0;
        font-weight: 600;
        font-size: 1.5rem; */
  }
  .experienceflex {
    flex-direction: column;
  }
  .experience {
    width: 95%;
  }
  .skills h1 {
    margin: 2rem 0;
  }
  .last {
    padding: 1rem;
    /* font-size: 6px; */
  }
  .last h5 {
    font-size: 12px;
  }
}
</style>
