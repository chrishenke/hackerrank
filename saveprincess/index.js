function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for (var i = 1; i <= dimension; ++i) {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}

function displayPathtoPrincess(dimension, grid) {
    let princessPosition = [];
    let botPosition = [];

    //find the princess and bot
    grid.forEach((row, key) => {
        if (row.indexOf('p') >= 0) {
            princessPosition = [key, row.indexOf('p')];
        }
        if (row.indexOf('m') >= 0) {
            botPosition = [key, row.indexOf('m')];
        }
    });
    let yDiff = botPosition[0] - princessPosition[0];
    let xDiff = botPosition[1] - princessPosition[1];

    let moves = '';
    while (yDiff !== 0) {
        if (yDiff < 0) {
            process.stdout.write('DOWN\n');
            yDiff++;
        }
        else {
            process.stdout.write('UP\n');
            yDiff--;
        }
    }
    while (xDiff !== 0) {
        if (xDiff < 0) {
            process.stdout.write('RIGHT\n');
            xDiff++;
        }
        else {
            process.stdout.write('LEFT\n');
            xDiff--;
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
