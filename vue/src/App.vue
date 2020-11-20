<template>
  <div id="app">
    <owc-button
      class="button"
      :shape = "shape"
      :label = "label"
      :color = "color"
      :face = "face"
      :disabled = "disable"
      :textcolor = "textcolor"
    />
  </div>
</template>

<script>
import 'owc-custom-button'

export default {
  name: 'App',
  data () {
    return {
      shape: 'pill',
      label: 'Hola',
      color: 'red',
      face: 'outline',
      disabled: false,
      textcolor: 'blue'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
