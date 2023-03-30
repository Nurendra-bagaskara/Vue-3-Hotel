<template>
    <sidebar/>
    <div class="p-4 sm:ml-64">
          <!-- Navbar -->
          <div class="p-2 mt-6 border-2 border-gray-200 rounded-lg dark:border-gray-700 ">
          <nav class="bg-white mt-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
             
            <h1 class="mb-2 flex items-center">Daftar Pemesanan</h1>
          
          <div class="flex md:order-2">
             <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search</span>
             </button>
             <div class="relative hidden md:block">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
             </div>
             <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
             </button>
          </div>
             <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                   <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
                </div>
             </div>
          </div>
          </nav>
         <div class="text-left px-2 py-4">
            
         </div>
         <div class="flex items-center justify-center pb-12">
            <table v-if="pemesanan.length > 0">
               <thead>
                  <tr class="h-14 rounded bg-gray-200 dark:bg-gray-800 ">
                     <th class="px-16">Nomor</th>
                     <th class="px-16">Tanggal Check In</th>
                     <th class="px-16">Tanggal Check out</th>
                     <th class="px-16">Nama Tamu</th>
                     <th class="px-16">Email</th>
                     <th class="px-16">Aksi</th>
                  </tr>
               </thead>
               <br>
               <tbody >
               <tr v-for="(itemPemesanan, show) in pemesanan" v-bind:key="itemPemesanan.id">
                  <td >{{ show+1 }}</td>
                  <td >{{ itemPemesanan.checkin_date }}</td>
                  <td >{{ itemPemesanan.checkout_date }}</td>
                  <td >{{ itemPemesanan.guest_name }}</td>
                  <td >{{ itemPemesanan.user_id}}</td>
                  <td >
                     <button class="mr-1 bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-xl shadow"><i class="fas fa-light fa-pen"></i></button>
                     <button class="bg-red-500 hover:bg-red-600 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-xl shadow"><i class="fas fa-solid fa-trash"></i></button>
                  </td>
               </tr>
            </tbody>
            <!-- <p class="text-2xl text-gray-400 dark:text-gray-500"></p> -->
         </table>
         <div v-else>
            <h1>Data Tidak Ditemukan</h1>
         </div>
      </div>
      <div>
         <router-link to="/Create-kamar">
            <button class="mr-1 bg-green-400 hover:bg-green-500 text-gray-800 font-semibold py-2 px-3 border border-gray-400 shadow"><i class="fas fa-solid fa-plus "></i> Create Data</button>
         </router-link>
      </div>
   </div>
    </div>
</template>

<script>
import axios from 'axios'
import Sidebar from '../../components/Sidebar.vue'
export default {
    name: 'Pemesanan_pages',
      components: {
       Sidebar
      },
      data() {
         return{
         pemesanan: []
         };
      },
      mounted() {
         axios
         .get("http://localhost:8000/api/pemesanan",{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}, accept: "application/json"})
         .then(res => (this.pemesanan = res.data))
         .catch(err => console.log(err));
         console.log();  
      }
}
</script>
