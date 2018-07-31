import Address from 'js/addressService.js'

export default {
  data() {
    return {
      name: '',
      tel: '',
      provinceValue: -1,
      cityValue: -1,
      districtValue: -1,
      address: '',
      id: '',
      addressData: require('js/address.json'),
      type: '',
      isDataInitialed: 0
      // cityList: null,
      // districtList: null,
      // instance: this.$route.query.instance,
      // instance: JSON.parse(sessionStorage.getItem('instance'))
    }
  },
  created() {
    // console.log(this.addressData);
    this.type = this.$route.query.type;
    if (this.type === 'edit') {
      // let ad = this.instance
      this.provinceValue = parseInt(this.$route.query.provinceValue)
      this.cityValue = parseInt(this.$route.query.cityValue)
      this.districtValue = parseInt(this.$route.query.districtValue)
      this.name = this.$route.query.name
      this.tel = this.$route.query.tel
      this.address = this.$route.query.address
      this.id = this.$route.query.id
    }
  },
  computed: {
    cityList() {

      if (this.provinceValue != -1) {
        return this.addressData.list.find(v => {
          return v.value == this.provinceValue
        }).children;
      }
    },
    districtList() {
      if (this.provinceValue != -1 && this.cityValue != -1) {
        return this.addressData.list.find(v => {
          return v.value == this.provinceValue
        }).children.find(v => {
          return v.value == this.cityValue;
        }).children;
      }
    }
  },
  methods: {
    add() {
      // 校验
      let {
        name,
        tel,
        provinceValue,
        cityValue,
        districtValue,
        address
      } = this
      let data = {
        name,
        tel,
        provinceValue,
        cityValue,
        districtValue,
        address
      }
      if (this.type === 'edit') {
        data.id = this.id
        Address.update(data).then(res => {
          this.$router.go(-1)
        })
      } else {
        Address.add(data).then(res => {
          this.$router.go(-1)
        })
      }
    },
    remove() {
      if (window.confirm("确认删除?")) {
        Address.remove(this.id).then(res => {
          this.$router.go(-1)
        })
      }
    },
    setDefault() {
      Address.setDefault(this.id).then(res => {
        this.$router.go(-1)
      })
    }
  },
  watch: {
    provinceValue(val) {
      if (this.isDataInitialed >= 2) {
        this.cityValue = -1;
        this.districtValue = -1;
      }
      this.isDataInitialed += 1
    },
    cityValue(val) {
      if (this.isDataInitialed >= 2) {
        this.districtValue = -1;
      }
      this.isDataInitialed += 1
    }
  }
}


