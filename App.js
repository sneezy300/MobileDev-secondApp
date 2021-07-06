import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons';
import images from './assets/images.jpg';


function App() {
    return <View style={styles.container}>
        <Image source={images} style={styles.image} />
        <FontAwesome name="camera" style={styles.FontAwesome} />

        <View>
            <Text style={styles.school}>SCHOOL</Text>
        </View>
        <View>
            <TextInput style={styles.input}
                placeholder="enter school"
                placeholderTextColor="#aaaaaa" />
        </View>
        <View>
            <Text style={styles.email}>EMAIL</Text>
        </View>
        <View>
            <TextInput style={styles.input}
                placeholder="enter email"
                placeholderTextColor="#aaaaaa" />
        </View>

        <View stle={styles.info}>
            <Text style={styles.infoText}>Name</Text>
        </View>
        <View>
            <TextInput style={styles.infoInput} />
        </View>
        <View>
            <Text style={styles.infoText}>Nick Name</Text>
        </View>
        <View>
            <TextInput style={styles.infoInput} />
        </View>
        <View>
            <Text style={styles.infoText}>Emergency Contact</Text>

        </View>
        <View>
            <Entypo name="old-phone" style={styles.entypo} />
            <TextInput placeholder="" style={styles.infoInput} onChangeText={Number} />

        </View>

        <View>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
        </View>


    </View>
}




const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,



    },

    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 40
    },


    FontAwesome: {
        height: 30,
        width: 30,
        fontSize: 30,
        marginLeft: 185,
        position: "relative",
        left: 15,
        bottom: 49,
        color: "#07eaf2",


    },



    school: {
        fontSize: 15,
        color: "#d6d6d6",

    },

    email: {
        fontSize: 15,
        color: "#d6d6d6"
    },


    input: {
        fontSize: 20,
        height: 40,
        marginBottom: 15,

    },

    infoText: {
        color: "#07eaf2",
        fontSize: 15,
        marginTop: 20,
        height: 20
    },

    infoInput: {
        borderBottomWidth: 1,
        borderBottomColor: "#aaaaaa",
        height: 20,
        fontSize: 20
    },

    buttonContainer: {
        height: 45,
        width: "90%",
        backgroundColor: "#07eaf2",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 20,
        marginVertical: 30
    },

    buttonText: {
        color: "white",
        fontSize: 25,
        alignSelf: "center"

    },

    entypo: {
        fontSize: 24,
        color: "black",
        alignSelf: "flex-end",
        position: "relative",
        top: 20



    }


});

export default App;