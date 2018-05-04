
  


<template>

 <div class="app">
   <header class="main-header">
  <nav class="main-nav">
    <ul class="nav-links"> 
      <nuxt-link to="/" tag="li" class="nav-link"> <a>All Posts</a> </nuxt-link>
      <nuxt-link to="/about" tag="li" class="nav-link"> <a>About</a> </nuxt-link>
       </ul>
  </nav>  
</header>
<div class="listaProdutos">
   <appFichaProduto class="centrado"  produtos v-for="(artigos,index) in artigos" 
                                      :key = "index"
                                      :produto ="artigos.produto"
                                      :valor ="artigos.valor"
                                      v-on:click.native="carregaCarrinho(artigo)"
                                      style="cursor: pointer" />
</div> 
<div class="listaCarrinhoCompras">
  <br> <br>
  <h2>Carrinho de Compras</h2>
  {{ultimaCompra | date}} - {{soma()+'€'}}
  <app-ficha-produto v-for="(artigo, index) in carrinhoCompras"
                  :key = "index"
                  :produto="artigo.produtos"
                  :valor="+artigo.valor" />
</div>
 </div>
</template>

<script>
import axios from 'axios';
import appFichaProduto from '@/components/appFichaProduto';


export default {
  components: {
    appFichaProduto
  },
  data(){
    return{
      carrinhoCompras:[],
      ultimaCompra: false
    }
  },
  filters: {
    formataData(dados){
      return dados.toString().slice(0,10)
    }
  },
  methods:{
    carregaCarrinho(artigo){
      this.carrinhoCompras.unshift({...artigo, dataCompra: new Date()});
      this.ultimaCompra = this.carrinhoCompras[0].dataCompra;
      },
  
    soma(carrinhoCompras){
      if (this.carrinhoCompras.length < 1 ){
        return 0
      } else {
        return this.carrinhoCompras.map( (a) => Math.floor(a.valor))
                                   .reduce((a,b) => {return a + b})}
    },
    },
    
  asyncData(){
    return axios.get('https://fichadevue.firebaseio.com/.json')
      .then((res) =>{return {artigos: res.data}
      })
  }





  /*
  data(){
    return{
      artigos:[
        {
          produto: "Coisa Fixe",
          valor: 25
        },
        {
          produto: "Intervalo para o pessoal ir ao continente",
          valor: 9999999999
        },
        {
          produto: "Aprender frontend",
          valor: 4000
        }
      ]
    }
  }*/





}
</script>

<style scoped>
.app{
  margin-top: 10rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.listaProdutos{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.listaCarrinhoCompras{
  display: flex;
  min-width: 500px;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #06c4d1;
  background-color: #eee;
}
.centrado{
  align-items: center;
  padding-left: 1px;
  margin-top: 3%;
  font-family: Arial, Helvetica, sans-serif;
  
}
.main-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: black;
  height: 4.5rem;
}
.main-nav{
  height:100%;
}
.nav-links{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
   font-family: Verdana;
  align-items: center;
  height: 100%;
}
.nav-link{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.1rem;
}
.nav-link a{
  display: block;
  text-decoration: none;
  color: aliceblue;
}
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color:lightskyblue;
}
.nav-link.nav-link.nuxt-link-exact-active{
  border-bottom: 3px solid aliceblue;
}
</style>
