import react,{Component}  from 'react';
import {Text,View} from 'react-native';

export default class  Homescreen extends Components{
    render(){
        return(
            <View
            style = {{ 
                flex:1,
                justifyContent:"center",
                alineItems : ("center")
            }}>
            <Text>    Homescreen              </Text>   
            </View>
            
            
        )
    }
}