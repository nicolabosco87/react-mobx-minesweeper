import React, {Component} from 'react';
import * as CONSTANTS from '../include/constants'
import {action, observable} from "mobx";

export default class GameModel {

    @observable gameStatus = CONSTANTS.GAME_STATUS_ONGOING;

    @observable grid = {};


    constructor() {
        this.buildGrid();
    }

    @action setGrid(grid) {
        this.grid = grid;
    }

    @action gameOver(won) {
        this.gameStatus = won ? CONSTANTS.GAME_STATUS_STOP_WON : CONSTANTS.GAME_STATUS_STOP_LOSE;
    }

    @action openCell(row, col) {
        if (this.grid[row][col].isMine) {
            this.gameOver(false);
        }
    }


    getMaxMines() {
        return (CONSTANTS.GRID_ROWS * CONSTANTS.GRID_COLS) / 5 * (CONSTANTS.GAME_DIFFICULTLY);
    }

    buildGrid() {
        let maxMines = this.getMaxMines(), addedMines = 0, grid = {};

        for (let i=0; i < CONSTANTS.GRID_ROWS; i++) {

            grid[i] = {};

            for (let k=0, isMine = false; k < CONSTANTS.GRID_ROWS; k++) {
                if (addedMines < maxMines && Math.random() * 2 > 1) {
                    addedMines++;
                    isMine = true;
                }

                grid[i][k] = { isMine: isMine, opened: false, row: i, col: k};

            }

        }

        this.setGrid(grid);
    }


}