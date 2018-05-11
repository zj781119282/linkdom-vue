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
      defaultCountry: {},
      list: [],
    }
  },
  methods: {
    getDefaultCode() {
      getData().getDefaultCountryCode().then(res => {
        const data = res.data;
        this.defaultCountry = {
          name: localStorage._lang === 'zh-CN' ? data.name : data.enName,
          id: data.dialCode,
        };
      });
    },
    getCountryCodes() { // @TODO
      getData().getCountryCodes().then(res => {
        const data = res.data;
        data.forEach(item => {
          const country = {
            name: localStorage._lang === 'zh-CN' ? item.name : item.enName,
            id: item.dialCode,
          };
          this.list.push(country);
        });
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
    this.getDefaultCode();
    this.getCountryCodes();
  },
}
