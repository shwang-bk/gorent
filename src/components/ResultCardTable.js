import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
class ResultCardTable extends Component {

    state = {
        labels: [],
        row: []
    };

    componentWillReceiveProps = (nextProps) => {
        delete nextProps.labels[1]
        delete nextProps.row[1]
        this.setState({
            labels: nextProps.labels,
            row: nextProps.row
        })
    }

    valueColumn = (index) => {
        if(this.state.labels[index] === '電話'){
            let telHref = "tel:"+this.state.row[index]
            return (
                <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>
                    <a href={telHref}>{this.state.row[index]}</a>
                </TableRowColumn>
            )
        }
        else if(this.state.labels[index] === '地址'){
            let geoHref = "geo:0,0?q="+encodeURI(this.state.row[index])
            return (
                <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>
                    <a href={geoHref}>{this.state.row[index]}</a>
                </TableRowColumn>
            )
        }
        return (
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>
                {this.state.row[index]}
            </TableRowColumn>
        )
    }

    render() {
        return (
            <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                    {this.state.labels.map((val, index) => 
                        <TableRow key={index.toString()}>
                            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word'}}>
                                {this.state.labels[index]}
                            </TableRowColumn>
                            {this.valueColumn(index)}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

export default ResultCardTable;