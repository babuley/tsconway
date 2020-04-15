import * as React from "react";
import { render } from "react-dom";
import {Item} from "./ConwayGame";

interface CellProps {  
  active: boolean;
  item: Item;
}

class Cell extends React.Component<CellProps, {}> {

    dim:number = 5;

    constructor(props) {
        super(props);
    }

    state = {
        active : this.props.active,
        item: this.props.item
    }

    public activate(active : boolean) {
        this.setState({active : active });            
    }
    
    public render()  {
        if (this.props.item.active) {
            return (<rect key={this.props.item.id} x={this.props.item.x*this.dim} y={this.props.item.y*this.dim} 
                rx="1" ry="1" width={this.dim} height={this.dim}
            fill="green" strokeWidth="1" stroke="grey"  />)            
        } else {
            return (<rect key={this.props.item.id} x={this.props.item.x*this.dim} y={this.props.item.y*this.dim} 
                rx="1" ry="1" width={this.dim} height={this.dim}
            fill="orange" strokeWidth="1" stroke="grey"  />)
        }
    }
}



export default Cell;