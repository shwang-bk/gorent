import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
class FilterDrawerList extends Component {

    state = {
        confirm: true,
        searchId: ""
    };

    handleToggle = () => {

    }

    render() {
        return (
            <div>
                <List>
                    <ListItem primaryText="類型" rightToggle={<Toggle />}/>
                    <ListItem primaryText="格局" rightToggle={<Toggle />}/>
                    <ListItem primaryText="坪數" rightToggle={<Toggle />}/>
                    <ListItem primaryText="房屋型態" rightToggle={<Toggle />}/>
                    <ListItem primaryText="樓層" rightToggle={<Toggle />}/>
                    <ListItem primaryText="性別" rightToggle={<Toggle />}/>
                    <ListItem primaryText="提供設備" nestedItems={[
                        <ListItem primaryText="電視" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="冷氣" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="冰箱" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="熱水器" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="天然瓦斯" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="第四台" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="網路" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="洗衣機" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="床" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="衣櫃" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="沙發" leftCheckbox={<Checkbox />}/>
                    ]}/>
                    <ListItem primaryText="其他" nestedItems={[
                        <ListItem primaryText="車位" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="電梯" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="陽台" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="開伙" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="養寵物" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="捷運" leftCheckbox={<Checkbox />}/>,
                        <ListItem primaryText="短期租賃" leftCheckbox={<Checkbox />}/>
                    ]}/>
                </List>
            </div>);
    }
}

export default FilterDrawerList;