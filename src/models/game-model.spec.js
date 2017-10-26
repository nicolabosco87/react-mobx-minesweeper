import GameModel from './GameModel';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
// import Chance from 'chance';

// const chance = new Chance();


describe('Game Model', function () {
    describe('testing the game model', function () {
        let gameModel, compiledGrid;

        beforeEach(function () {
            gameModel = new GameModel();

            compiledGrid = {
                '0': {
                    '0': {isMine: false},
                    '1': {isMine: true},
                    '2': {isMine: false},
                    '3': {isMine: false},
                    '4': {isMine: false},
                },
                '1': {
                    '0': {isMine: true},
                    '1': {isMine: false},
                    '2': {isMine: false},
                    '3': {isMine: true},
                    '4': {isMine: false},
                },
                '2': {
                    '0': {isMine: false},
                    '1': {isMine: false},
                    '2': {isMine: true},
                    '3': {isMine: false},
                    '4': {isMine: false},
                },
                '3': {
                    '0': {isMine: false},
                    '1': {isMine: false},
                    '2': {isMine: false},
                    '3': {isMine: true},
                    '4': {isMine: false},
                },
                '4': {
                    '0': {isMine: false},
                    '1': {isMine: false},
                    '2': {isMine: false},
                    '3': {isMine: false},
                    '4': {isMine: false},
                },
            }
        });

        it('should create the cells', function () {
            gameModel.buildGrid();

            expect(gameModel.grid).not.be.a('null');
            expect(gameModel.grid[0]).not.be.a('null');
            expect(gameModel.grid[0][0]).not.be.a('null');
        });



        it('nearby mines calculation', function () {
            gameModel.setGrid(compiledGrid);

            expect(gameModel.getCellAdjacentMinesNumber(0, 0)).to.equal(2);
            expect(gameModel.getCellAdjacentMinesNumber(1, 2)).to.equal(3);
            expect(gameModel.getCellAdjacentMinesNumber(2, 4)).to.equal(2);
            expect(gameModel.getCellAdjacentMinesNumber(4, 4)).to.equal(1);
            expect(gameModel.getCellAdjacentMinesNumber(4, 0)).to.equal(0);
        });

        it('should open cells', function () {
            gameModel.setGrid(compiledGrid);
            gameModel.openCell(0, 0);

            expect(gameModel.grid[0][0].opened).to.equal(true);
        });

        it('should open neearby cells', function () {
            gameModel.setGrid(compiledGrid);
            gameModel.openCell(4, 0);

            expect(gameModel.grid[3][0].opened).to.equal(true);
            expect(gameModel.grid[3][1].opened).to.equal(true);
            expect(gameModel.grid[4][0].opened).to.equal(true);
            expect(gameModel.grid[4][1].opened).to.equal(true);
        });

    });
});