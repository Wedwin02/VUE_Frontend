<template>
    <div>
        <header-vue/>
          <div class="container">
            <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
        </table>
          </div>
        <footer-vue/>
    </div>
</template>
<script>
import headerVue from '@/components/header.vue'
import footerVue from '@/components/footer.vue'
import axios from 'axios'
export default{
   name: "Dashboard",
   components:{
    headerVue,
    footerVue

   },
   mounted:function(){
    let direccion = "http://127.0.0.1:8000/api/empleados/";
    axios.get(direccion).then(data=>{
        console.log(data);
    });

   }
}
</script>
<style lang="stylus" scoped>
</style>