import * as React from "react";
import { render, createPortal } from "react-dom";
import Cell from "./Cell";
import { ConwayGame, Item } from "./ConwayGame";


class Cells extends React.Component {

  game = new ConwayGame();

  constructor(props) {
    super(props);
    setTimeout(this.fliper, 100);
  }

  state = {
    items: this.game.getGrid(50, 100)
  };

  nextTick = () => {
    const grid = this.game.getNextRun(this.state.items);
    this.setState({ items: grid });
  }

  fliper = () => {
    setInterval(this.nextTick, 100);
  }

  render() {
    return (<div>
      <svg width="800" height="600">
        {this.state.items.map(item => (
          <Cell key={item.id} active={item.active} item={item} />
        ))}
      </svg>
    </div>
    );
  }

}


export default Cells;
