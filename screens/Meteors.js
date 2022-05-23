import react, {Component} from 'react';
import {Text,View} from 'react-native';

export default class MeteorScreen extends Component{
    render(){
        return(
            <View
            style = {{
                flex:1,
                justify: "center",
                alignItems: "center"
            }}>
                <Text >   MeteorScreen    </Text>
                </View>
        )
    }
}