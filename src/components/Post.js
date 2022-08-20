import { Divider } from "@rneui/base";
import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const Post =({Post})=>   {
    return(
        <View style={{marginBottom:30}}>
            <Divider width ={1} orientation='vertical'/>
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <View style={{marginHorizontal:15,marginTop:10}}>
                <PostFooter  post={post}/>
                <PostLikes  post={post}/>
                <PostCaption  post={post}/>
                <PostCommentSection post={post}/>
                <PostComment post={post}/>
                
            </View>
           
        </View>
    )
}

const PostHeader =({post}) =>(

    <View style ={{flexDirection:"row", justifyContent:'space-between', margin:5, alignItems:'center'}}>
        <View style= {{flexDirection:'row', alignItems:'center'}}>
            <Image style= {styles.story} source={{uri:post.profile_picture}}/>
            <Text style={{color:'white', marginLeft:10, fontWeight:'700'}}>
                {post.user}
            </Text>
        </View>
        
        <TouchableOpacity>
        
             <Icon  style ={styles.icon} name="ellipsis-horizontal-outline" size={25} color="#fff" />

        </TouchableOpacity>
    </View>
)
const PostImage = ({post}) =>(

        <View style ={{width:'100', height:450}}>
            <Image style= {{height:'100%', resizeMode:'cover'}} source={{uri:post.imageUrl}}/>
           
        </View>
    
)

const PostFooter = ({post}) =>(

    <View style ={{flexDirection:'row'}}>
       <View style ={{flexDirection:'row', width:'32%', justifyContent:'space-between'}}>

             <TouchableOpacity>
                 <Icon   name="heart-outline" size={25} color="#fff" />
             </TouchableOpacity>

             <TouchableOpacity>
             
                 <Icon   name="chatbubble-outline" size={25} color="#fff" />
             </TouchableOpacity>
             
             <TouchableOpacity>
             
                 <Icon style={styles.shareicon}  name="send-outline" size={25} color="#fff" />
             </TouchableOpacity>

       </View>
       <View style ={{flex:1, alignItems:'flex-end'}}>
             <TouchableOpacity>
                 <Icon   name="bookmark-outline" size={25} color="#fff" />
             </TouchableOpacity>
       </View>
    </View>
)

const PostLikes = ({post}) =>(

    <View style ={{flexDirection:'row', marginTop:4}}>
        <Text style ={{color:'white', fontWeight:'600'}}>
            {
            post.likes.toLocaleString('en')
            } likes 

        </Text>
       
    </View>

)
const PostCaption = ({post}) =>(

    <View style ={{flexDirection:'row', marginTop:5}}>
        <Text style ={{color:'white', flexWrap:'wrap', flex:1}}>
            <Text style ={{fontWeight:'600'}}>
                {post.user}

            </Text>
            <Text >
                {post.caption}

            </Text>

        </Text>
       
    </View>

)

const PostCommentSection = ({post}) =>(

    <View style ={{flexDirection:'row', marginTop:5}}>

{
        !!post.comments.length &&(
        <Text style ={{color:'gray', flexWrap:'wrap', flex:1}}>
            View{
                post.comments.length>1 ? 'all' : ''
            }
            {
                post.comments.length
            }
            {
                post.comments.length>1 ? 'comments' : 'comment'
            }

        </Text>)}
       
    </View>

)

const PostComment = ({post}) =>(
    {
        post.comment.map((comment, index)=>(
            <View key =(index) style ={{flexDirection:'row', marginTop:5}}>
                <Text style ={{color:'white', flexWrap:'wrap', flex:1}}>
            <Text style ={{fontWeight:'600'}}>
                {post.user}

            </Text>
            <Text >
                {post.caption}

            </Text>

        </Text>
      </View>
        ))
    }
    

)


const styles=StyleSheet.create({
    story:{
        width:35,
        height:35,
        marginLeft:5,
        borderWidth:3,
        borderColor:'#ff8501',
        borderRadius:35
    },
    icon:{
        width:25,
        height:25,
        marginLeft:10

    },
    shareicon:{
        transform:[{rotate:'320deg'}],
        marginTop:-3        
    }
})

export default Post;