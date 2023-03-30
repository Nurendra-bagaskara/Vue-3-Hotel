<template data-spy="scroll" data-target=".fixed-top">
    <!-- Navigation -->
    <Navbar/>
    <!-- Navigation -->
        

        <!-- Header -->
        <header id="header" class="header py-28 pt-32 text-center md:pt-36 lg:text-left  xl:pb-32">
            <div class="container  lg:grid lg:grid-cols-2 "> 
                <div class="mb-16 lg:mt-32 xl:mt-24 xl:mr-12">
                    <h1 class="h1-large mb-5">Yasui Hotel</h1>
                    <p class="p-large mb-8">Yasui Hotel Pilihan para wisatawan, dengan menyajikan pesona interior yang memanjakan mata pengunjung dan pelayanan yang sangat baik untuk memanjakan para pengunjung</p>
                    <a class="btn-solid-lg" href="#your-link"><i class="fab fa-apple"></i>Book Now</a>
                    <a class="btn-solid-lg secondary" href="#your-link"><i class="fab fa-google-play"></i>Download</a>
                </div>
                <div class="xl:text-right">
                    <img class="inline pt-20" src="../../public/assets/images/hotel.png" alt="alternative" />
                </div>
            </div> <!-- end of container -->
        </header> <!-- end of header -->
        <!-- end of header -->


        <div class="container">
            <h1 class="h1-large">
                Fasilitas
            </h1>
        </div>
        <!-- Features -->
        <div id="features" class="cards-1 mb-16">
            <div class="container px-4 sm:px-8 xl:px-4">

                <!-- Card -->
                <div class="card shadow-xl">
                    <div class="card-image " style="font-size: 70px; ">
                        <i class="fas fa-duotone fa-wifi"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Wifi</h5>
                        <p class="mb-4">You sales force can use the app on any smartphone platform without compatibility issues</p>
                    </div>
                </div>
                <!-- end of card -->

                <!-- Card -->
                <div class="card shadow-xl">
                    <div class="card-image" style="font-size: 70px;">
                        <i class="fas fa-light fa-bath"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Bathroom Inside</h5>
                        <p class="mb-4">Works smoothly even on older generation hardware due to our optimization efforts</p>
                    </div>
                </div>
                <!-- end of card -->

                <!-- Card -->
                <div class="card shadow-xl">
                    <div class="card-image" style="font-size: 70px;">
                        <i class="fas fa-regular fa-bell-concierge"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Reception service</h5>
                        <p class="mb-4">Optimized code and innovative technology insure no delays and ultra-fast responsiveness</p>
                    </div>
                </div>
                <!-- end of card -->

                <!-- Card -->
                <div class="card shadow-xl" >
                    <div class="card-image" style="font-size: 70px;">
                        <i class="fas fa-regular fa-tv"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Television</h5>
                        <p class="mb-4">Choose from one of the 40 languages that come pre-installed and start selling smarter</p>
                    </div>
                </div>
                <!-- end of card -->

                <!-- Card -->
                <div class="card shadow-xl">
                    <div class="card-image" style="font-size: 70px;">
                        <i class="fas fa-regular fa-mug-saucer"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Free breakfast</h5>
                        <p class="mb-4">Don't worry about future costs, pay once and receive all future updates at no extra cost</p>
                    </div>
                </div>
                <!-- end of card -->

                <!-- Card -->
                <div class="card shadow-xl">
                    <div class="card-image" style="font-size: 70px;">
                        <i class="fas fa-regular fa-water-ladder"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Swimming Pool</h5>
                        <p class="mb-4">Register the app and get acces to knowledge and ideas from the Pavo online community</p>
                    </div>
                </div>
                <!-- end of card -->

            </div> <!-- end of container -->
        </div> <!-- end of cards-1 -->
        <!-- end of features -->

        <div class="container mb-8">
            <h1 class="h1-large">
                Jenis Kamar
            </h1>
        </div>
        <div v-if="tipe_kamar.length > 0" >
            <div v-for="itemTipeKamar in tipe_kamar" v-bind:key="itemTipeKamar.id">
                <div v-if="itemTipeKamar.id % 2 == 1">
                    <!-- Details 1 -->
                    <div id="details"  class="pt-12 pb-16 lg:pt-16" >
                        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
                            <div class="lg:col-span-6">
                                <div class="mb-16 lg:mb-0 xl:mt-6">
                                    <h3 class="mb-6">{{ itemTipeKamar.tipe_kamar }}</h3>
                                    <p class="mb-6">{{ itemTipeKamar.description }}</p>
                                </div>
                                <a class="btn-solid-reg popup-with-move-anim mr-1.5" href="#details-lightbox">Lightbox</a>
                                <a class="btn-outline-reg" href="article.html">Details</a>
                            </div> <!-- end of col -->
                            <div class="lg:col-span-6 ">
                                <div class="xl:ml-14">
                                    <img class="w-full rounded-lg" :src="'http://localhost:8000/images/'+ itemTipeKamar.Photo_name" alt="Sunset in the mountains" >
                                </div>
                            </div> <!-- end of col -->
                        </div> <!-- end of container -->
                    </div>
                    <!-- end of details 1 -->
                </div>
                <div v-else>
                    <!-- Details 2 -->
                    <div class="py-24">
                        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
                            <div class="lg:col-span-6">
                                <div class="mb-12 lg:mb-0 xl:mr-14">
                                    <img class="w-full rounded-lg" :src="'http://localhost:8000/images/'+ itemTipeKamar.Photo_name" alt="Sunset in the mountains" >
                                </div>
                            </div> 
                            <div class="lg:col-span-6">
                                <div class="xl:mt-12">
                                    <h3 class="mb-6">{{ itemTipeKamar.tipe_kamar }}</h3>
                                    <p class="mb-6">{{ itemTipeKamar.description }}</p>
                                </div>
                                <a class="btn-solid-reg popup-with-move-anim mr-1.5" href="#details-lightbox">Lightbox</a>
                                <a class="btn-outline-reg" href="article.html">Details</a>
                            </div>
                        </div> 
                    </div>
                    <!-- end of details 2 -->
                </div>  
            </div>
        </div>
        <div v-else>
            <P class="text-3xl text-white">
                data tidak ditemukan
            </P>
        </div>



        <!-- Statistics -->
        <div class="counter">
            <div class="container px-4 sm:px-8">
                
            

            </div> <!-- end of container -->
        </div> <!-- end of counter -->
        <!-- end of statistics -->


        <!-- Pricing -->
        <div id="pricing" class="cards-2">
            <!-- <div class="absolute bottom-0 h-40 w-full bg-white"></div> -->
            <div class="container px-4 pb-px sm:px-8">
                <h2 class="mb-2.5 text-white lg:max-w-xl lg:mx-auto">Pricing options for all budgets</h2>
                <p class="mb-16 text-white lg:max-w-3xl lg:mx-auto"> Our pricing plans are setup in such a way that any user can start enjoying Pavo without worrying so much about costs. They are flexible and work for any type of industry </p>
                
                <div v-if="tipe_kamar.length > 0">
                    <!-- Card-->
                    <div class="card" v-for="itemTipeKamar in tipe_kamar" v-bind:key="itemTipeKamar.id">
                        <div class="card-body">
                            <!-- <div class="w-full">{{ itemTipeKamar.Photo_name }} </div> -->
                            <div class="card-title">{{ itemTipeKamar.tipe_kamar }}</div>
                            <div class="price"><span class="currency">$</span><span class="value">{{ itemTipeKamar.price }}</span></div>
                            <br>
                            <!-- <div class="frequency">monthly</div> -->
                            <!-- <p class="text-center text-bold">{{ itemTipeKamar.description }}</p> -->
                            <ul class="list mb-7 space-y-2 text-left " style="color: #6b747b;">
                            <li class="flex">
                                <i class="fas fa-chevron-right"></i>
                                <div>Free Wifi</div>
                            </li>
                            <li class="flex">
                                <i class="fas fa-chevron-right"></i>
                                <div>Bathroom Inside</div>
                            </li>
                            <li class="flex">
                                <i class="fas fa-chevron-right"></i>
                                <div>Air Conditioner</div>
                            </li>
                            <li class="flex">
                                <i class="fas fa-chevron-right"></i>
                                <div>Television</div>
                            </li>
                            <li class="flex">
                                <i class="fas fa-chevron-right"></i>
                                <div>Free Breakfast</div>
                            </li>
                            <li class="flex">
                                <i class="fas fa-chevron-right"></i>
                                <div>Auto Lock</div>
                            </li>
                        </ul>
                            <div class="button-wrapper">
                                <a class="btn-solid-reg page-scroll" href="#download">Download</a>
                            </div>
                        </div>
                    </div> <!-- end of card -->
                    <!-- end of card -->
                </div>
                <div v-else>
                    <P class="text-3xl text-white">
                        data tidak ditemukan
                    </P>
                </div>


            </div> <!-- end of container -->
        </div> <!-- end of cards-2 -->
        <!-- end of pricing -->


        <!-- Conclusion -->
        <div id="download" class="basic-5">
            <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
                <div class="mb-16 lg:mb-0">
                    <img src="../../public/assets/images/conclusion-smartphone.png" alt="alternative" />
                </div>
                <div class="lg:mt-24 xl:mt-44 xl:ml-12">
                    <p class="mb-9 text-gray-800 text-3xl leading-10">Team management mobile applications don’t get much better than Pavo. Download it today</p>
                    <a class="btn-solid-lg" href="#your-link"><i class="fab fa-apple"></i>Download</a>
                    <a class="btn-solid-lg secondary" href="#your-link"><i class="fab fa-google-play"></i>Download</a>
                </div>
            </div> <!-- end of container -->
        </div> <!-- end of basic-5 -->
        <!-- end of conclusion -->



        <!-- end of copyright -->
    <!-- </div> -->

    <!-- Footer -->
    <div class="footer">
            <div class="container px-4 sm:px-8">
                <h4 class="mb-8 lg:max-w-3xl lg:mx-auto">Pavo is a mobile application for marketing automation and you can reach the team at <a class="text-indigo-600 hover:text-gray-500" href="mailto:email@domain.com">email@domain.com</a></h4>
                <div class="social-container">
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-pinterest-p fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-youtube fa-stack-1x"></i>
                        </a>
                    </span>
                </div> <!-- end of social-container -->
            </div> <!-- end of container -->
        </div> <!-- end of footer -->
</template>

<script>
import axios from "axios";
import Navbar from '../components/Navbar.vue';
export default {
  name: 'Home_pages',
  components: {
   Navbar
  },
  data() {
      return{
        tipe_kamar: []
      };
  },
  mounted() {
    axios
    .get("http://localhost:8000/api/tipe_kamar", { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}, accept: "application/json"})
    .then(res => (this.tipe_kamar = res.data))
    .catch(err => console.log(err));
    console.log();  
  }
};
</script>
