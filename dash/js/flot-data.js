//Flot Line Chart
$(document).ready(function() {
    console.log("document ready");
    var offset = 0;
    plot();

    function plot() {
        // var sin = [],
        //     cos = [];
        // for (var i = 0; i < 12; i += 0.2) {
        //     sin.push([i, Math.sin(i + offset)]);
        //     cos.push([i, Math.cos(i + offset)]);
        // }
        var container = $("#flot-line-chart");
        var maximum = container.outerWidth() / 2 || 300;
        var data = [];
        
        function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }

        while (data.length < 31) {
            // var previous = data.length ? data[data.length - 1] : 50;
            var y = Math.random() * 300 + 500;
            data.push(y);
        }

        // zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }

        return res;
    }

        var options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            },
            yaxis: {
                min: 0,
                max: 1000
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' of %x.1 is %y.4",
                shifts: {
                    x: -60,
                    y: 25
                }
            }
        };

        var plotObj = $.plot($("#flot-line-chart"), [{
                data: getRandomData(),
                label: "Calorie Intake Per Day"
            }],
            options);
    }
});

//Flot Pie Chart
$(function() {

    var data = [{
        label: "Restaraunts",
        data: 4
    }, {
        label: "Fast Food",
        data: 9
    }, {
        label: "Drinks",
        data: 15
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});




//Flot Bar Chart

$(function() {

    var barOptions = {
        series: {
            bars: {
                show: true,
                barWidth: 43200000
            }
        },
        xaxis: {
            mode: "time",
            timeformat: "%m/%d",
            minTickSize: [1, "day"]
        },
        grid: {
            hoverable: true
        },
        legend: {
            show: false
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };
    var barData = {
        label: "bar",
        data: [
            [1354521600000, 1000],
            [1355040000000, 2000],
            [1355223600000, 3000],
            [1355306400000, 4000],
            [1355487300000, 5000],
            [1355571900000, 6000]
        ]
    };
    $.plot($("#flot-bar-chart"), [barData], barOptions);

});
