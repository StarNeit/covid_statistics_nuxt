import Api from '~/services'

export default ({ $axios }, inject) => {
  Api.$axios = $axios
  inject('Api', Api)
}
