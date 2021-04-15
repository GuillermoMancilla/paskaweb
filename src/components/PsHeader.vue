<template>
    <header>
        <div class="flex justify-center hhbg">
            <img src="../assets/paskabg.png" alt="imgheader" class="psk">
            <!-- <img src="../assets/paskabg.png" alt="imgheader" class="border-2 border-red-600 psk"> -->
        </div>
        <nav class="flex justify-center border-2 border-red-600  h-12 barr">
            <ul class="flex row">
                <li><router-link to="/"><button type="button" class="focus:outline-none text-white text-l py-2 px-8 rounded-md  hover:bg-red-600 hover:shadow-lg -mt-2 barr">Home</button></router-link></li>
                <li><router-link to="/historia"><button type="button" class="focus:outline-none text-white text-l py-2 px-8 rounded-md  hover:bg-red-600 hover:shadow-lg -mt-2 barr">historia</button></router-link></li>
                <li><a href="https://paska.cl/tienda/"><button type="button" class="focus:outline-none text-white text-l py-2 px-8 rounded-md  hover:bg-red-600 hover:shadow-lg -mt-2 barr">tienda</button></a></li>
                <li><router-link to="/contenidofans/"><button type="button" class="focus:outline-none text-white text-l py-2 px-8 rounded-md  hover:bg-red-600 hover:shadow-lg -mt-2 barr">Fans</button></router-link></li>
                <li><router-link to="/contacto"><button type="button" class="focus:outline-none text-white text-l py-2 px-5 rounded-md  hover:bg-red-600 hover:shadow-lg -mt-2 barr">Contacto</button></router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name:"PsHeader"
}
</script>

<style scoped>
/* .hhbg{
    background-image: url("/assets/paskabg.png");
    background-size: cover;
    height: 140px;
    width: 100%;
    margin-top: -60px;
} */

.psk{
    width: 100%;
    height: 120%;
}

li{
    /* margin-left: 10px;
    margin-right: 10px; */
    margin: 10px 30px 0px 30px;
}

.barr{
    background-color: #630000;
}
</style>