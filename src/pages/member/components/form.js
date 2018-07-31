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


// import Address from 'js/addressService.js'
// export default {
//   data() {
//     return {
//       name: '',
//       tel: '',
//       provinceValue: -1,
//       cityValue: -1,
//       districtValue: -1,
//       address: '',
//       id: '',
//       type: '',
//       // type:this.$route.query.type,
//       instance: '',
//       // instance: this.$route.query.instance,
//       addressData: require('js/address.json'),
//       // 省 市 区 三级
//       cityList: null,
//       districtList: null,
//     }
//   },
//   created() {
//     let query = this.$route.query;
//     this.type = query.type
//     this.instance = query.instance
//     console.log('created');

//     if(this.type === 'edit') {
//       let ad = this.instance;
//       this.provinceValue = parseInt(ad.provinceValue);
//       this.name = ad.name;
//       this.tel = ad.tel;
//       this.address = ad.address;
//       // console.log(this.address);

//       this.id = ad.id;
//       // console.log( this.id );

//       // console.log('created end');
//     }
//   },
//   methods:{
//     add() {
//       let {name,tel,provinceValue,cityValue,districtValue,address} = this;
//       let data = {name,tel,provinceValue,cityValue,districtValue,address}
//       if(this.type === 'add') {
//         Address.add(data).then(res => {
//           this.$router.go(-1)
//         })
//       }

//       if(this.type === 'edit') {
//         data.id = this.id
//         Address.update(data).then(res => {
//           this.$router.go(-1)
//         })
//       }

//     },
//     remove() {
//       if(window.confirm('确认删除吗？')) {
//         Address.remove(this.id).then(res => {
//           this.$router.go(-1)
//         })
//       }
//       // console.log('44444');
//     },
//     setDefault() {
//       Address.setDefault(this.id).then(res => {
//         this.$router.go(-1)
//       })
//       // console.log('55555');
//     },
//   },
//   watch: {
//     provinceValue(val) {
//       if (val === -1) {
//         return
//       }

//       let index = this.addressData.list.findIndex(item => {
//         return item.value === val
//       })
//       this.cityList = this.addressData.list[index].children;
//       // console.log(this.cityList);

//       this.cityValue = -1;
//       this.districtValue = -1;

//       if(this.type === 'edit') {
//         this.cityValue = parseInt(this.instance.cityValue)
//         // console.log(this.cityValue);

//       }
//     },
//     cityValue(val) {
//       if (val === -1) {
//         return
//       }
//       let index = this.cityList.findIndex(item => {
//         return item.value === val
//       })
//       this.districtList = this.cityList[index].children;
//       console.log(this.districtList);

//       this.districtValue = -1;

//       if(this.type === 'edit') {
//         this.districtValue = parseInt(this.instance.districtValue)
//         // console.log(this.districtValue);

//       }
//       // console.log('88888');
//     }
//   }
// }
