import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { themeColor } from '../Theme'
import ResturantCar from './ResturantCar'

export default function FeaturedRow({ title, restaurants, description }) {
    return (
        <View>
            <View style={tw`flex-row justify-between items-center px-4`}>
                <View>
                    <Text style={tw`font-bold text-lg`}>{title}</Text>
                    <Text style={tw`text-gray-500 text-xs`}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text
                        style={[tw`font-semibold`, { color: themeColor.text }]}
                    >See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                style={[tw`overflow-visible py-5`,{marginBottom:10}]}
            >
                {
                    restaurants.map((resturant, index) => {
                        return (<ResturantCar
                            item={resturant}
                            key={index}
                        />)
                    })
                }
            </ScrollView>
        </View>
    )
}
