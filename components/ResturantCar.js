import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import * as Icon from "react-native-feather";
import { themeColor } from '../Theme';
import { useNavigation } from '@react-navigation/native';

export default function ResturantCar({ item }) {
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
        onPress={()=>navigation.navigate('ResturantScreen',{...item})}
        >
            <View style={[tw`mr-6 bg-white rounded-3xl shadow-lg`,{marginBottom:10,shadowColor:themeColor.bgColor(0.7),shadowRadius:7}]}>
                <Image
                    style={[tw`h-36 w-64 rounded-t-3xl`]}
                    source={item.image}
                />
                <View style={[tw`px-3 pb-3`]}>

                    <Text style={tw`text-lg font-bold pt-2`}>{item.name}</Text>
                    <View style={tw`flex-row items-center `}>
                        <Image source={require('../assets/images/fullStar.png')} style={tw`h-4 w-4`} />
                        <Text style={tw`text-xs`}>
                            <Text style={tw`text-green-700`}>{item.stars}</Text>
                            <Text style={tw`text-gray-700`}>({item.reviews} reviews) · <Text style={tw`font-semibold`}>{item.type}</Text></Text>
                        </Text>
                    </View>
                    <View style={tw`flex-row items-center`}>
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text style={tw`text-gray-700 text-xs`}> Nearby · {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
