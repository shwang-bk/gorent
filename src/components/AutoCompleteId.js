import React, {Component} from 'react';
import sheetrock from 'sheetrock';
import AutoComplete from 'material-ui/AutoComplete';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
class AutoCompleteId extends Component {
    urls = [
        "https://docs.google.com/spreadsheets/d/hashed_key/edit#gid=random_id"
    ]
    state = {
        dataSource: []
    };

    constructor(props) {
        super(props);
        this.initSource(this.urls, [])
    }

    initSource = (curUrls, vals) => {
        this.urls.forEach(qurl => {
            sheetrock({
                url: qurl,
                query: "select B",
                callback: (error, options, response) => {
                    if(error){
                        console.error(error)
                        return
                    }
                    var newVals = response.rows.map(val => {return val.cellsArray[0]})
                    this.setState({dataSource: this.state.dataSource.concat(newVals)})
                },
                reset: true
            })
        })
    }

    onTextChange = (searchText, dataSource, params) => {
        this.props.onTextChange(searchText);
    }

    render() {
        return (
            <AutoComplete fullWidth={true}
                hintText="輸入物件編號"
                dataSource={this.state.dataSource}
                onUpdateInput={this.onTextChange}
            />
        );
    }
}

export default AutoCompleteId;