<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt="logo"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-navbar-brand to="/">Inicio</b-navbar-brand>
          <b-navbar-brand to="/portafolio">Portafolio</b-navbar-brand>
          <b-navbar-brand to="/contacto">Contacto</b-navbar-brand>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Buscar</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!--
    <router-link to="/">Inicio</router-link>
    <router-link to="/Portafolio">Portafolio</router-link>
    <router-link to="/Contacto">Contacto</router-link>
    <router-view/> 
    -->
    <router-view/>
  </div>
</template>

<style>
img {
  width: 30px;
  font-size: 20px;
}
</style>
