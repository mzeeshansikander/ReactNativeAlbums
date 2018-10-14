import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state={
        albums:[]
    };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setstate({albums: response.data}));

    
    
    }

    render(){
        return ( 
            <View>
                <Text>
                    AlbumList
                </Text>
            </View>
        );
    }
};

export default AlbumList;
