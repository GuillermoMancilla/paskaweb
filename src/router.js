import vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Contact from "@/views/Contacto";
import Historia from "@/views/Historia";
import Error from "@/views/Error";
import ContenidoFan from "@/views/ContenidoF"



vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },

    {
      path: "/contacto",
      name: "Contacto",
      component: Contact
    },
    {
      path: "/historia",
      name: "Historia",
      component: Historia 
    },
      
    {
      path: "/contenidofans",
      name: "ContenidoFan",
      component: ContenidoFan
    },
    {
      path: "*",
      name: "Error",
      component: Error
    },
    
  ]
});