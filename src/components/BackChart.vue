<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'BackChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyOnRails', 'MySQL', 'Python'],
        datasets: [
          {
            label: 'back',
            data: [30, 30, 20, 10, 0],
            backgroundColor: [
              'rgba(15,136,57,0.25)'
            ],
            borderColor: [
              'rgba(87, 16, 131, 0.75)',
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(75,192,192,1)',
              'rgba(153,102,255,1)',
              'rgba(255,159,64,1)'
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        responsive: true,
        scale: {
          ticks: {
            maxTicksLimit: 5,
            beginAtZero: true,
            max:50,
            min:0,
            atepSize: 10
          }
        },
        legend: {
          display:false,}
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
