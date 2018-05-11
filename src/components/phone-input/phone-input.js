import getData from 'service/getData'
import dropdown from './../dropdown/dropdown.vue'
import countryCode from './../country-code/country-code.vue'

export default {
  name: 'phone-input',
  components: {
    dropdown,
    countryCode,
  },
  data() {
    return {
      phone: '',
      show: false,
      // test data
      defaultCountry: {
        name: 'China',
        id: '+86',
      },
      list: [
        {
          name: 'China',
          id: '+86',
        },
        {
          name: 'USA',
          id: '+1',
        },
      ],
      // test data
    }
  },
  methods: {
    getCountryCodes() { // @TODO
      getData().getCountryCodes().then(res => {
        console.log(res)
      });
    },
    getSelected(item) {
      this.defaultCountry = item;
      this.$emit('selected', item);
      this.show = false;
    },
    inputPhone() {
      this.$emit('phone', this.phone);
    },
  },
  mounted() {
    this.getCountryCodes();
  },
}
