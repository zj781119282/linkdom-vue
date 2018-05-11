import getData from 'service/getData'

export default {
  name: 'country-code',
  props: [
    'list',
  ],
  methods: {
    getCode(item) {
      this.$emit('selected', item);
    },
  },
}
