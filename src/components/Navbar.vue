<template>
    <!-- Navigation -->
    <nav class="navbar fixed-top">
            <div class=" sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
                
                <!-- Text Logo - Use this if you don't have a graphic logo -->
                <!-- <a class="text-gray-800 font-semibold text-3xl leading-4 no-underline page-scroll" href="index.html">Pavo</a> -->

                <!-- Image Logo -->
                <a class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
                    <img src="../../public/assets/images/logo.svg" alt="alternative" class="h-8" />
                </a>

                <button class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                    <span class="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                    <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                        <li>

                            <router-link class="nav-link page-scroll " to="/">Home <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li>
                            <router-link class="nav-link page-scroll" to="/About">About</router-link>
                        </li>
                        <!-- <li>
                            <router-link class="nav-link page-scroll" to="/Gallery">Gallery</router-link>
                        </li> -->
                        <li>
                            <router-link class="nav-link page-scroll" to="/Booking">Booking</router-link>
                        </li>
                        <!-- <li>
                            <router-link class="nav-link page-scroll" to="/Profil">Profil</router-link>
                        </li> -->
                        <!-- <template v-if="role === 'admin'">  -->
                            <li >
                                <router-link class="nav-link page-scroll" to="/Admin">Admin Pages</router-link>
                            </li>
                        <!-- </template> -->
                    </ul>
                    <span  class="block lg:ml-3.5" >
                        <router-link :disabled!="null" class="btn btn-solid-reg secondary" to="/Login">Login/Register </router-link>
                    </span>
                    
                </div> <!-- end of navbar-collapse -->
            </div> <!-- end of container -->
        </nav> <!-- end of navbar -->
        <!-- end of navigation -->
</template>

<script>


export default {
    name: 'Navbar_Pages',
    // data(){
    //     return {
    //         role: null,
    //     }
    // },
    // mounted(){
    //     this.role = localStorage.getItem("role")
    // }
}
</script>
