import { View, Text, TextInput, ScrollView } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColor } from '../Theme'
import Categories from '../components/Categories'
import { featured } from '../Constants'
import FeaturedRow from '../components/FeaturedRow'


export default function HomeScreen() {
    return (
        <SafeAreaView style={tw`bg-white`}>
            <StatusBar style="dark-content" />
            {/* Search Bar */}
            <View style={tw`flex-row items-center  px-4 pb-2`}>
                <View style={tw`flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}>
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Search Resturants' style={tw`ml-2 flex-1`} />
                    <View style={tw`flex-row items-center border-l-2 pl-2 border-l-gray-300`}>
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text style={tw`text-gray-600`}>Bangalore</Text>
                    </View>
                </View>
                <View style={[tw`p-3 m-1 rounded-full `, { backgroundColor: themeColor.bgColor(1) }]}>
                    <Icon.Sliders height="15" width="15" strokeWidth={2.5} stroke="white" />
                </View>
            </View>
            {/* Main View */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}>
                {/* Categories */}
                <Categories />
                {/* Featured */}
                <View style={tw`mt-5 mb-2`}>
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (<FeaturedRow 
                            key={index}
                            title={item.title}
                            restaurants={item.restaurants}
                            description={item.description}
                            />)
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

