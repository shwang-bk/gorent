import React, {Component} from 'react';
import sheetrock from 'sheetrock';
import CircularProgress from 'material-ui/CircularProgress';
import ResultCard from './ResultCard';


/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
class ResultCardList extends Component {
    urls = [
        "https://docs.google.com/spreadsheets/d/hashed_key/edit#gid=random_id"
    ]

    state = {
        showProgress: false,
        showResult: true,
        labels: [],
        rows: []
    };

    results = {
        count: 0,
        result: []
    }

    componentWillReceiveProps = nextProps => {
        if(nextProps.confirm && nextProps.cid !== "" && nextProps.cid !== this.props.cid){
            this.setState({showProgress: true, showResult: false})
            this.onQuery(nextProps.cid)
        }
    }

    onQuery = text => {
        this.urls.forEach(qurl => {
            sheetrock({
                url: qurl,
                query: "select A,B,C,D,E,F,H,I,J,K,M,N,O where B='" + text + "'",
                callback: (error, options, response) => {
                    if(error){
                        console.error(error)
                        this.results.count++
                        return
                    }
                    this.onQueryResponse(response)
                },
                reset: true
            })
        })
    }

    onQueryResponse = response => {
        var newRows = response.rows.map(val => {return val.cellsArray})
        var newVals = newRows.slice(1, newRows.length)
        this.results.count++
        this.results.result = this.results.result.concat(newVals)
        if(this.results.count === this.urls.length){
            this.setState({
                showProgress: false,
                showResult: true,
                rows: this.results.result,
                labels: newRows[0]
            })
            this.reset_result()
        }
    }

    reset_result = () => {
        this.results = {
            count: 0,
            result: []
        }
    }

    render() {
        return (
        <div style={{position: 'relative'}}> 
            {this.state.showProgress && (
                <CircularProgress size={80} thickness={5} style={{ marginLeft: '40%', marginTop: '10%'}}/>
            )}
            {this.state.showResult && this.state.rows.map((val, index) =>
                <ResultCard key={index.toString()} row={val} labels={this.state.labels} />
            )}
        </div>
        );
    }
}

export default ResultCardList;