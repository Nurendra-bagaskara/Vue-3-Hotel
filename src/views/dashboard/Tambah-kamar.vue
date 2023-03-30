<template>
    <sidebar/>
    <div class="p-4 sm:ml-64">    
        <div class="p-2 mt-6 border-2 border-gray-200 rounded-lg dark:border-gray-700 ">
            <div class="text-left px-2 pb-6">
                <h1 class="mb-2">Tambah Data Kamar</h1>
            </div>
            <div>
            <!-- alert -->
            <div v-if="strSuccess" class="flex mb-8 py-4 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <strong>{{ strSuccess }}</strong>
            </div>

            <div v-if="strError" class="flex mb-8 py-4 items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <strong>{{ strError }}</strong>
            </div>
            <!-- alert -->
            </div>
            <div class="flex items-center justify-center pb-12">
                <form method="POST"  class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            room_number
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="room_number" type="text" placeholder="example 001" v-model="kamar.room_number">
                        <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Pilih Type Kamar
                        </label>
                        <select id="tipe_kamar_id" v-model="kamar.tipe_kamar_id" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option selected id="tipe_kamar_id" value="">Select Tipe Kamar</option>
                            <option v-for="itemTipeKamar in tipe_kamar" v-bind:key="itemTipeKamar.id">{{ itemTipeKamar.tipe_kamar }}</option>
                        </select>
                        <!-- <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> -->
                        </div>
                    </div>
                    <div class="text-right px-4">
                        <router-link class="mr-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-xl shadow" to="/Kamar">Kembali</router-link>
                        <button v-on:click="create()" type="submit" class="bg-green-400 hover:bg-green-500 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded-xl shadow">Simpan</button>
                    </div>
                </form> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Sidebar from '../../components/Sidebar.vue'

export default {
name: 'tambah-kamar',
    components: {
    Sidebar
    },
    data(){
        return{
            tipe_kamar: [],
            kamar:{
                room_number:'',
                tipe_kamar_id:'',
            }, 
            strSuccess:'',
            strError:'',
        }
    },
    methods:{
        
        async create(){
            await this.axios.post('http://localhost:8000/api/kamar/create', this.kamar,{ headers: {"Authorization" : `Berer ${localStorage.getItem('token')}`}, accept: "application/json"})
            .then(res => (this.kamar = res.data))
            .catch(err => console.log(err));
            console.log();  
            
        }
    },
    mounted() {
        axios
        .get("http://localhost:8000/api/tipe_kamar",{ headers: {"Authorization" : `Berer ${localStorage.getItem('token')}`}, accept: "application/json"})
        .then(res => (this.tipe_kamar = res.data))
        .catch(err => console.log(err));
        console.log();  
    }
}
</script>
