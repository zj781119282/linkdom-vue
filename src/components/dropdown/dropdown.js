export default {
  name: 'dropdown',
  props: [
    'head',
    'list',
  ],
  data() {
    return {
      show: false,
      headData: {},
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('selected', item);
      this.show = false;
    },
  },
  mounted() {
    this.headData = this.head;
  },
  watch: {
    head(nv) {
      this.headData = this.head;
    }
  },
}
