import { useDisplay } from 'vuetify'

export default {
  computed: {
    breakpoint() {
      const value = useDisplay()
      const result = value.thresholds._object
      return result
    }
  }
}