import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import RedirectView from "@/views/RedirectView.vue";
import PlaylistView from "@/views/PlaylistView.vue";
import PlaylistsView from "@/views/PlaylistsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        }, {
            path: '/redirect',
            name: 'Redirect',
            component: RedirectView
        }, {
            path: '/playlists',
            name: 'Playlists',
            component: PlaylistsView
        }, {
            path: '/playlists/:id',
            name: 'Playlist',
            component: PlaylistView
        },
    ]
})
export default router
