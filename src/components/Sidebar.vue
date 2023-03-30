<template>
    <!-- Navigation -->
    <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
   </button>

   <aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2">
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <i class="fas fa-solid fa-square-poll-vertical"></i>
               <router-link class="ml-3" to="/Admin">Dashboard</router-link>
            </a>
         </li>

         <!-- Users -->
         <li>
            <button type="button"  class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <i class="fas fa-solid fa-user"></i>
               <router-link data-dropdown-toggle="dropdown" to="/Kamar" class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Data Customer</router-link>   
            </button>
         </li>
         <!-- Users -->

         <!-- kamar -->
         <li>
            <button type="button"  class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <i class="fas fa-solid fa-door-closed"></i>
               <router-link data-dropdown-toggle="dropdown" to="/Kamar" class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Kamar</router-link>   
            </button>
         </li>
         <li>
            <button type="button"  class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <i class="fas fa-solid fa-filter"></i>
               <router-link data-dropdown-toggle="dropdown" to="/Tipe_Kamar" class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Tipe Kamar</router-link>
            </button>
         </li>
         <!-- kamar -->

         <!-- pemesanan -->
         <li>
            <button type="button"  class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <i class="fas fa-sharp fa-solid fa-list"></i>
               <router-link data-dropdown-toggle="dropdown" to="/Pemesanan" class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Pemesanan</router-link>   
            </button>
         </li>
         <li>
            <button type="button"  class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <i class="fas fa-solid fa-circle-info"></i>
               <router-link data-dropdown-toggle="dropdown" to="/Tipe_Kamar" class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Detail Pemesanan</router-link>
            </button>
         </li>
         <!-- pemesanan -->


      </ul>
   </div>
   </aside>
</template>

<script>
export default {
    name: 'Sidebar_Pages',
}
</script>