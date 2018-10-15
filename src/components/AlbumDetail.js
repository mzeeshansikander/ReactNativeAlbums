import React from 'react';
import {View,Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({data}) =>{

    const {title, artist, thumbnail_image,image, url} = data;

    return (
        <Card>
            <CardSection>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{uri: thumbnail_image}} />

            </View>
            
            <View style={styles.mainBox}>
            
                <Text style={{fontSize: 18}}>{title}</Text>
                <Text>{artist}</Text>
            
            </View>
            
            </CardSection>
            <CardSection>
                <Image style={{height:300,flex:1,width:null}} source={{uri:image}} />
            </CardSection>
            <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
                   Buy Now
            </Button>
            </CardSection>
        </Card>



    );
};
const styles={
    mainBox:{
        flexDirection: 'column',
        justifyContent: 'space-around'

    },
    imageStyle: {
        height: 50,
        width: 50
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
    


}

export default AlbumDetail;
