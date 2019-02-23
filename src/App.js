import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FilterDrawerList from './components/FilterDrawerList';
import AutoCompleteId from './components/AutoCompleteId';
import ResultCardList from './components/ResultCardList';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

class App extends Component {

    partId = "";

    state = {
        confirm: true,
        searchId: ""
    };

    onTextChange = (text) => {
        this.partId = text
    }

    onSerch = () => {
        this.setState({searchId: this.partId})
    }

    render() {
        return (
        <MuiThemeProvider>
            <div>
                <AppBar title="GORENT 物件查詢" />
                <Toolbar>
                    <ToolbarGroup>
                        <AutoCompleteId onTextChange={this.onTextChange} />
                        <RaisedButton label="搜尋" onClick={this.onSerch} />
                    </ToolbarGroup>
                </Toolbar>
                <ResultCardList confirm={this.state.confirm} cid={this.state.searchId} />
                {/* <Drawer width={"30%"} openSecondary={true} open={this.state.open}>
                    <FilterDrawerList />
                </Drawer> */}
            </div>
        </MuiThemeProvider>
        );
    }
}

export default App;
