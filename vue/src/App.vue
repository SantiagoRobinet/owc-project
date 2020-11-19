<template>
  <div id="app">
    <owc-button
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
