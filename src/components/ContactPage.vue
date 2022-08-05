<template>
  <the-header></the-header>
  <div class="head">
    <h1>LET'S GET IN TOUCH.</h1>
    <div class="dash"></div>
    <h2>RIDAM JAIN</h2>
    <h6><a href="mailto:ridam258@gmail.com">ridam258@gmail.com</a></h6>
    <h6>+91 7509016189</h6>
    <div class="social">
      <div class="d-flex socialflex">
        <div class="left">
          <h4><span> LINKEDIN </span></h4>
          <h6>
            <a href="https://www.linkedin.com/in/ridam-jain-77366717a/"
              >https://www.linkedin.com/in/ridam-jain-77366717a/</a
            >
          </h6>
        </div>
        <div class="right">
          <h4><span> Github </span></h4>
          <h6>
            <a href="https://github.com/ridam258"
              >https://github.com/ridam258</a
            >
          </h6>
        </div>
      </div>
      <div class="d-flex socialflex">
        <div class="left">
          <h4><span> Instagram </span></h4>
          <h6>
            <a href="https://www.instagram.com/ridam._.jain/"
              >https://www.instagram.com/ridam._.jain/</a
            >
          </h6>
        </div>
        <div class="right">
          <h4><span> Resume </span></h4>
          <h6>
            <a
              style="color: #988345"
              href="https://drive.google.com/drive/u/0/my-drive"
              >Download Pdf</a
            >
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style scoped>
.header {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
}
.head {
  background-color: #efeeea;
  height: 100vh;
  padding-top: 10rem;
}
h1 {
  font-size: 64px;
  font-weight: 700;
  text-align: center;
}
.dash {
  height: 10px;
  width: 50px;
  background-color: #988345;
  margin: 10px auto;
}
h2 {
  font-weight: 700;
  font-size: 38px;
  margin: 10px 0;
  text-align: center;
}
h6 a {
  color: #988345;
  text-decoration: none;
  font-size: 20px;
}
h6 {
  font-size: 20px;
  text-align: center;
}
.social span::after {
  content: "";
  display: block;
  margin: 0.2em 0 0 0;
  width: 2em;
  height: 0.3em;
  background: #988345;
}
.social h4::after {
  width: 90%;
  content: "";
  display: block;
  position: relative;
  top: -0.15em;
  right: -2.5em;
  height: 0.15em;
  background: #b3b9c0;
}
.social h6 {
  text-align: left;
  font-size: 18px;
  color: #988345;
}
.social h4 {
  font-size: 20px;
  font-weight: 700;
}
.socialflex div {
  /* margin:1rem auto 0; */
  width: 35%;
}
.social {
  padding: 3rem 0;
}
.right {
  margin: 2rem auto 0 2rem;
}
.left {
  margin: 2rem 2rem 0 auto;
}
@media screen and (max-width: 1000px) {
  /* .head{
            height: unset;
            display: inline-block;
            width: 100vw;
        }
        h1{
            font-size: 48px;
        }
        h2{
            font-size: 32px;
        }
        h2,h6{
            text-align: center;
        }
        .social{
            margin:2rem  2rem;
        }
        .socialflex{
            flex-direction: column;
            margin: 0;
        }
        .socialflex div{
            margin: 1rem 0;
            width: 80%;
            display: inline;
        }
        .socialflex h6{
            text-align: left;
        } */
  .head {
    height: unset;
    padding-top: 6rem;
  }
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
    margin: 5px 0;
  }
  .head h6 {
    font-size: 14px;
  }
  h6 a {
    font-size: 14px;
  }
  .dash {
    width: 30px;
    height: 5px;
  }
  .socialflex {
    flex-direction: column;
    /* margin: 0; */
  }
  .socialflex div {
    width: 70%;
  }
  .left,
  .right {
    margin: 1rem 2rem;
  }
  .social h6 {
    font-size: 14px;
  }
  .social h6 a {
    font-size: 14px;
  }
  .social {
    padding: 2rem 0;
  }
}
</style>
