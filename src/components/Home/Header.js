import  React from 'react'
import {View,Text, SafeAreaView,StyleSheet, TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    
                <Icon  style ={styles.icon} name="add-circle-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    
                <Icon  style ={styles.icon} name="heart-outline" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style= {styles.unreadBadgeT}>
                        <Text style ={styles.unreadBadgeText}>11</Text>
                    </View>
                <Icon  style ={styles.icon} name="chatbubble-ellipses-outline" size={30} color="#fff" />
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles= StyleSheet.create({

    container:{
        justifyContent:'space-between',
        alignItem:'center',
        flexDirection:'row',
        marginHorizontal:20

    },
    iconContainer:{
            flexDirection:'row',
            color:'white'
    },

    logo:{
    width:150,
    height:60,
    resizeMode:'contain'
},
    icon:{
        width:30,
        height:30,
        marginLeft:10

    },
    unreadBadgeT:{
        position:'absolute',
        backgroundColor:'#ff3250',
        right:-5,
        top:-5,
        borderRadius:25,
        width:25,
        height:18,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600'
    },
}
)

export default Header