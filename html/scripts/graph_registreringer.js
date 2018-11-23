function  graph_init_register(v)
{
    var context  = document.getElementById(v).getContext('2d');

    var chart = new Chart(context,
        {
            type: 'pie',
            data:
                {
                    labels:['mænd', 'kvinder'],
                    datasets:
                    [{
                        labels: '# procetage of people that are registered',
                        data: [42.0, 58.0],
                        backgroundColor: [
                            'rgba(230, 0, 0, 0.5)',
                            'rgba(0, 0, 230, 0.5)'

                        ],
                        borderColor: [

                        ],
                        borderWidth:1
                    }]
                },
            options: {
                scales:
                    {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
            }
        });
}


graph_init_register("graph_registered_canvas");