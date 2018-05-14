import Cookies from 'js-cookie'
import getData from 'service/getData'
import postData from 'service/postData'
import loading from '@/components/loading/loading.vue'
import inputField from '@/components/input-field/input-field.vue'

export default {
  name: 'add-address',
  components: {
    inputField,
    loading,
  },
  data() {
    return {
      phone: '',
      userName: '',
      userId: Cookies.get('userId'),
      address: '',
      street: '',
      area: '',
      province: '',
      country: '',
      postal: '',
      loaded: true,
    }
  },
  methods: {
    addAddress() {
      this.loaded = false;
      const params = {
        phone: this.phone,
        userName: this.userName,
        userId: this.userId,
        address: this.address,
        street: this.street,
        area: this.area,
        province: this.province,
        country: this.country,
        postal: this.postal,
      };
      postData().addAddress(params).then(res => {
        this.userAddress = res.data;
        this.loaded = true;
        this.$emit('added');
      })
    },
  },
}
