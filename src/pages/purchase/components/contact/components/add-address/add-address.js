import Cookies from 'js-cookie'
import getData from 'service/getData'
import postData from 'service/postData'
import inputField from '@/components/input-field/input-field.vue';

export default {
  name: 'add-address',
  components: {
    inputField,
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
    }
  },
  methods: {
    addAddress() {
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
        this.$emit('added');
      })
    },
  },
}
