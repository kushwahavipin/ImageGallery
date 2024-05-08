import React from 'react';
import { View, Text, ImageBackground,Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const ShowImage = (props) => {
  return (
    <View>
      <ImageBackground source={props.route.params.url} style={{height:deviceHeight, width:deviceWidth}}/>
    </View>
  );
}

export default ShowImage;
