new Vue({
  el: '#app',
  data: {
    range: {
      start: new Date(),
      end: '',
    },
    date: '',
  },
  methods: {
    getStartDate() {
      return dayjs(this.range.start).format('YYYY/MM/DD')
    },
    getEndDate() {
      return dayjs(this.range.end).format('YYYY/MM/DD')
    }
  },
})

dayjs().format();