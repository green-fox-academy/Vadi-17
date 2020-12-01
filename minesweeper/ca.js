'use strict';
// const canvas = document.querySelector('.main-canvas');
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
const canvasElement = document.querySelector('#canvas');
const ctx = canvasElement.getContext('2d');
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

canvasElement.with = 600;
canvasElement.height = 600;


const MinesweeperGame = {
    map: [],
    mines: [],
    mineNumber: 10,
    mapSize: {
        with: 10,
        height: 10
    },
    tile: {
        size: 30,
        margin: 1
    },
    creatMap() {
        // addig töltjük amig nem tellik be aknával
        while (this.mines.length < this.mineNumber) {
            const rowIndex = Math.round(this.mapSize.height - 1) * Math.random();
            const columnIndex = Math.round(this.mapSize.with - 1) * Math.random();
            //csak akkor ha ezen a csempén még nincs akna
            if (!this.mines.find(mine => mine.rowIndex === rowIndex && mine.columnIndex === columnIndex)) {
                this.mines.push({ rowIndex, columnIndex });
            }
        }

        // map init feltölti nullákkal
        for (let row = 0; row < this.mapSize.height; row++) {
            this.map[row] = []
            for (let colum = 0; colum < this.mapSize.with; colum++) {
                this.map[row][colum] = {
                    value: 0
                };
            }
        }
        // mine init, feltölti az aknákkal a mappot a tömbböl.
        // this.mines.forEach(mine => {
        //     const { rowIndex, columnIndex } = mine;
        //     this.map[rowIndex][columnIndex] = {
        //         value: 'mine'
        //     };
        // });

        this.drawMap();
    },
    drawMap() {
        this.map.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                this.drawTile(rowIndex, columnIndex);
            });
        });

    },
    drawTile(rowIndex, columnIndex) {
        const size = this.tile.size;
        const x = columnIndex * size + columnIndex * this.tile.margin;
        const y = rowIndex * size + rowIndex * this.tile.margin;
        ctx.fillStyle = '#777';
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        ctx.closePath();
        ctx.fill();
    }
};
MinesweeperGame.creatMap();