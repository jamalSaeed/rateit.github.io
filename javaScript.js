

var dat = [100, 150, 200, 340, 432];


let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = '#777';

var massPopChart = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    options: {
        responsive: true,
        maintainAspectRatio: true,
        borderWidth: 21
    },
    data: {

        labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
        datasets: [{
            label: 'Rating',
            data: [
                dat[0],
                dat[1],
                dat[2],
                dat[3],
                dat[4]
            ],
            //backgroundColor:'green',
            backgroundColor: [

                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Inception Rating Graph',
            fontSize: 15
        },
        legend: {

            display: true,
            position: 'right',

        },
        layout: {
            padding: {
                left: 50,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});

function btn() {
    alert(dat[4]++);
}





