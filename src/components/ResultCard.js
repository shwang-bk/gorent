import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import ResultCardTable from './ResultCardTable';
/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
class ResultCard extends Component {
    state = {
        cid: "",
        name: "",
        phone: "",
        address: "",
        labels: [],
        row: []
    };

    componentDidMount = (rootNode) => {
        this.updateCardInfo(this.props)
    }

    componentWillReceiveProps = (nextProps) => {
        this.updateCardInfo(nextProps)
    }

    updateCardInfo = (cardProps) => {
        this.setState({
            cid: cardProps.row[1],
            name: cardProps.row[4],
            phone: cardProps.row[5],
            address: cardProps.row[6],
            labels: cardProps.labels,
            row: cardProps.row
        })
    }

    render() {
        return (
            <Card>
                <CardTitle
                    title={this.state.cid + " " + this.state.name}
                    subtitle={this.state.phone + " " + this.state.address}
                />
                <CardText style={{paddingTop: "0px"}}>
                    <ResultCardTable labels={this.state.labels} row={this.state.row} />
                </CardText>
            </Card>);
    }
}

export default ResultCard;