import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import Booking from '../views/Booking.vue'
import Profil from '../views/Profil.vue'
import Admin from '../views/Admin.vue'
import Kamar from '../views/dashboard/Kamar.vue'
import TipeKamar from '../views/dashboard/Tipe-kamar.vue'
import Pemesanan from '../views/dashboard/Pemesanan.vue'
import TambahKamar from '../views/dashboard/Tambah-kamar.vue'

const routes = [
    {
        path: '/',
        name: 'Home_pages',
        component: Home
    },

    {
        path: '/Login',
        name: 'Login_pages',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register_pages',
        component: Register
    },
    {
        path: '/About',
        name: 'About_pages',
        component: About
    },
    {
        path: '/Gallery',
        name: 'Gallery_pages',
        component: Gallery
    },
    {
        path: '/Booking',
        name: 'Booking_pages',
        component: Booking
    },
    {
        path: '/Profil',
        name: 'Profil_pages',
        component: Profil
    },
    {
        path: '/Admin',
        name: 'Admin_pages',
        component: Admin
    },
    {
        path: '/Kamar',
        name: 'Kamar_pages',
        component: Kamar
    },
    {
        path: '/Tipe_Kamar',
        name: 'TipeKamar_pages',
        component: TipeKamar
    },
    {
        path: '/Pemesanan',
        name: 'Pemesanan_pages',
        component: Pemesanan
    },
    {
        path: '/Create-kamar',
        name: 'Tambah-kamar',
        component: TambahKamar
    }
]

const router = createRouter({
    history : createWebHistory (),
    routes
});

export default router;