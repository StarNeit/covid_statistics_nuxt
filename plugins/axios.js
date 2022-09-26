export default ({ $axios }) => {
  $axios.setBaseURL(process.env.BASE_URL)
}
