

<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'FrontChart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgba(181,26,26,0.25)'
            ],
            borderColor: [
              'rgba(181,26,26, 0.75)',
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
            max:5,
            min:0,
            atepSize: 10
          }
        },
        legend: {
          display:false,
        }
      }
    }
  },
 // computed:{
 //   score(){
 //     return this.$store.getters.graphScore
 //   },
 //   getcategories(){
 //     return this.$score.state.skillCategories;
 //   }
 // },
  mounted () {
    this.getSkills();
    this.renderChart(this.data, this.options);
   // this.$store.dispatch('updateSkillCategories')
  },
  methods:{
    getSkills(){
      const frontSkillInfo = this.$store.getters.getSkills('front-end')
      console.log(frontSkillInfo)
      frontSkillInfo.skills.forEach((skill) => {
        this.data.labels.push(skill.name),
        this.data.datasets[0].data.push(skill.score)
      })
    }
  }
}
</script>
