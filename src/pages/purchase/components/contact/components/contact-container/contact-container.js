import loading from '@/components/loading/loading.vue';
import addAddress from './../add-address/add-address.vue';
import getData from 'service/getData'
import postData from 'service/postData'

export default {
  name: 'contact-container',
  components: {
    addAddress,
    loading,
  },
  data() {
    return {
      address: [],
      id: 1,
      show: false,
      showButton: true,
      loaded: false,
    }
  },
  methods: {
    getAddress() {
      this.loaded = false;
      this.address = [];
      getData().getAddress().then(res => {
        if (res.data && res.data.length > 0) {
          res.data.forEach(item => {
            item.deleting = false;
            this.address.push(item);
          });
          this.id = res.data[0].id;
          this.showButton = true;
          this.show = false;
        } else {
          this.address = [];
          this.showButton = false;
          this.show = true;
        }
        this.loaded = true;
      });
    },
    selectAddress(id) {
      this.id = id;
    },
    deleteAddress(item) {
      item.deleting = true;
      const params = {
        addressId: item.id,
      };
      postData().deleteAddress(params).then(res => {
        item.deleting = false;
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
