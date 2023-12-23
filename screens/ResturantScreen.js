import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc'
import * as Icon from "react-native-feather";
import { themeColor } from '../Theme';

export default function ResturantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView>
        <View style={tw`relative`}>
          <Image style={tw`w-full h-72`} source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow`}>
            <Icon.ArrowLeft stroke={themeColor.bgColor(1)} strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View
          style={[{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }, tw`bg-white -mt-12 pt-6`]}
        >
          <View style={tw`px-5`}>
            <Text style={tw`text-3xl font-bold`}>{item.name}</Text>
            <View style={tw`flex-row my-1`}>
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
        </View>
      </ScrollView>
    </View>
  )
}