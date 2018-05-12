import addAddress from './../add-address/add-address.vue';
import getData from 'service/getData'
import postData from 'service/postData'

export default {
  name: 'contact-container',
  components: {
    addAddress,
  },
  data() {
    return {
      address: [],
      id: 1,
      show: false,
      showButton: true,
    }
  },
  methods: {
    getAddress() {
      getData().getAddress().then(res => {
        if (res.data && res.data.length > 0) {
          this.address = res.data;
          this.id = res.data[0].id;
          this.showButton = true;
          this.show = false;
        } else {
          this.address = [];
          this.showButton = false;
          this.show = true;
        }
      });
    },
    selectAddress(id) {
      this.id = id;
    },
    deleteAddress(id) {
      const params = {
        addressId: id,
      };
      postData().deleteAddress(params).then(res => {
        this.getAddress();
      })
    },
    payment() {
      if (!this.showButton) return;
      console.log('@TODO...');
    },
  },
  mounted() {
    this.getAddress();
  },
}
