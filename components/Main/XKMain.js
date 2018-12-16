/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Navigator, TabBarIOS} from 'react-native';
import Home from '../Home/XKHome.js';
import More from '../More/XKMore.js';
import Profile from '../Profile/XKProfile.js';
import Shop from '../Shop/XKShop.js';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class XKMain extends Component<Props> {

    constructor() {
        super()
        this.state = {
            selected: 'home'
        }
    }

    render() {
        return (
            <TabBarIOS
                tintColor="orange"
            >
                <TabBarIOS.Item
                    title="首页"
                    selected={this.state.selected === "home"}
                    onPress={()=>{this.setState({selected: "home"})}}
                >
                    <Home/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="发现"
                    selected={this.state.selected === "find"}
                    onPress={()=>{this.setState({selected: "find"})}}
                >
                    <Profile/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="消息"
                    selected={this.state.selected === "message"}
                    onPress={()=>{this.setState({selected: "message"})}}
                >
                    <More/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="我的"
                    selected={this.state.selected === "profile"}
                    onPress={()=>{this.setState({selected: "profile"})}}
                >
                    <Profile/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
