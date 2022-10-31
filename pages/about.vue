<script setup lang="ts">
import { RiCodeSSlashFill, RiDatabase2Line, RiFileList3Line, RiGlobalLine } from 'vue-remix-icons'
</script>

<template>
  <div>
    <!-- ======= About Section ======= -->
    <section id="about" class="about section-show">
      <!-- ======= About Me ======= -->
      <div class="about-me container">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src="~/assets/img/profile.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-lg-0 content pt-4" data-aos="fade-left">
            <p>
              I am a software developer with over 10 years of web development experience. My favorite technologies are PHP with laravel, JavaScript and node. on the Front end I really like Vue.js and React JS. I'm passionate about technology and I'm always looking to improve even more.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right" /> <strong>Birthday:</strong> 09 June 1998</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right" /> <strong>City:</strong> São Paulo, SP</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div><!-- End About Me -->

      <!-- ======= Interests ======= -->
      <div class="interests container">
        <div class="section-title">
          <h2>Interests</h2>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiGlobalLine width="32" height="32" fill="#ffbb2c" /></span>
              <h3>Software Development</h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-md-0 mt-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiDatabase2Line width="32" height="32" fill="#5578ff" /></span>
              <h3>Machine Learning</h3>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-md-4 mt-md-0 mt-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiCamera3Line width="32" height="32" fill="#e80328" /></span>
              <h3>Computer Vision</h3>
            </div>
          </div> -->
          <!-- <div class="col-lg-3 col-md-4 mt-lg-0 mt-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiEnglishInput width="32" height="32" fill="#1c7d32" /></span>
              <h3>Natural Language Processing</h3>
            </div>
          </div> -->
          <div class="col-lg-3 col-md-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiCodeSSlashFill width="32" height="32" fill="#28a745" /></span>
              <h3>Software Engineering</h3>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiBarChartBoxLine width="32" height="32" fill="#f1081f" /></span>
              <h3>Visualization</h3>
            </div>
          </div> -->
          <div class="col-lg-3 col-md-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiFileList3Line width="32" height="32" fill="#47aeff" /></span>
              <h3>Algorithms</h3>
            </div>
          </div>
          <!-- <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <span style="padding-right:10px"><RiImageLine width="32" height="32" fill="#ffc107" /></span>
              <h3>Image Processing</h3>
            </div>
          </div> -->
        </div>
      </div><!-- End Interests -->
    </section><!-- End About Section -->
  </div>
</template>
