var Bowling = require ('./app/Bowling'),
    Printer = require('./app/printer'),
    printer = new Printer.Print(),
    Input = require ('./app/input'),
    input = new Input.getInput(),
    game = new Bowling.Game(),
    scores = input.getScore();
    game._throws = scores;

    printer.result(game.score());
