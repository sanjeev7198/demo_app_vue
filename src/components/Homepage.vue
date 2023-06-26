<template>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-md-3 col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                    </div>
                    <div class="card-footer">
                        Test
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                    </div>
                    <div class="card-footer">
                        Test
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                    </div>
                    <div class="card-footer">
                        Test
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">John Doe</h4>
                    </div>
                    <div class="card-footer">
                        Test
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <h2 class="text-primary fw-bold text-center">
                Analytics
            </h2>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
                </div>
                <div class="col-md-6  d-flex align-items-center justify-content-center">
                    <Pie id="my-chart-id" class="chart2" :data="chartData" :options="chartOptions" />
                </div>
            </div>
        </div>
        
    </div>
</template>
  
<script>
import { Bar, Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import {ArcElement} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement)

export default {
  name: 'HomePage',
  components: { Bar, Pie },
  data() {
    return {
      chartData: {
        labels: [ 'Jan', 'Feb', 'Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
        datasets: [ { data: [40,20,12,35,23,56,10,23,19,62,11,39],
            label: 'Demo Data',
            backgroundColor: ['#00FFFF', '#ADD8E6', '#00FF00', '#7FFFD4', '#FFA500', '#C0C0C0','#00FFFF', '#ADD8E6', '#00FF00', '#7FFFD4', '#FFA500', '#C0C0C0' ]
         } ],
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style scoped>
.row .col-md-3 {
    padding: 0px 20px;
}

.container-fluid.mt-3 {
    min-height: calc(100vh - 72px);
}
.chart2{
    height: 100% !important;
    width: 50% !important;
}

.card-footer{
    background-color: rgb(32, 191, 85);
    background-image: linear-gradient(315deg, rgb(32 140 191) 0%, rgb(239 199 1) 74%);
}

.card-title{
    color:rgb(119, 201, 86);
}

.card{
    box-shadow: 1px 2px 12px gray;
}
</style>
  