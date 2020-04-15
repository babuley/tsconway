

export class ConwayGame {
    constructor() {
        console.log("ConwaysGame");
    }

    getGrid(width: number, height:number) {
        let g:Item[] = [];        
        let r:number = width * height;
        let condGen:Generator = new Generator();
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {                
                let active = condGen.activeCondition1(y,x);
                g.push(new Item(y,x, ""+this.getId(0,r), active));
            }
        }        
        return g;
    }

    getNextRun(grid:Item[]) {
        grid.forEach(item => {
            let neihgbours = this.defineNeighbours(item);
            let aliveNeighbours = this.getActiveNeighbours(grid, item, neihgbours);
            if (item.active) {
                let twoOrThreeActiveNeighbours = aliveNeighbours.length === 2 || aliveNeighbours.length === 3;
                if (!twoOrThreeActiveNeighbours){
                   item.active = false; 
                }
            } else {
                if (aliveNeighbours.length === 3) {
                    item.active = true;
                }
            }
        });
        return grid;
    }

    getId(min:number, max:number):number {
        return Math.random() * (max - min) + min;
    }

    getActiveNeighbours(grid:Item[],ofItem:Item, neighbours:Item[]){
        return this.getNeighbours(grid, ofItem, neighbours).filter(n => n.active);
    }

    getNeighbours(grid:Item[], ofItem:Item, neighbours:Item[]) {
        let calculated:Item[] = [];
        neighbours.forEach(n => {
            n.x = ofItem.x + n.x;
            n.y = ofItem.y + n.y;
        });        
        
        for (let gridItem of grid) {
            if (gridItem.id === ofItem.id) {
                continue;
            }
            for (let n of neighbours) {
                if (n.x === gridItem.x && n.y === gridItem.y) {
                    calculated.push(gridItem);
                }
            }
        }
        return calculated;
    }

    defineNeighbours(item:Item)  {
        let neighbours:Item[] = [];
        for (let j = -1; j < 2; j++) {
            for (let i= -1; i < 2; i++) {
                neighbours.push(new Item(i,j));
            }
        }
        return neighbours;
    }
}

export class Item {    
    width:number;
    height:number;
    constructor(public x:number, public y: number, public id:string = "", public active:boolean=false ){
    }
}

class Generator {
    constructor() {
    }

    activeCondition1(x:number, y:number):boolean {
        return x > 0 && x <15 && y%3 !== 0 && y > 5 && y < 25;
    }

}


export default ConwayGame;
