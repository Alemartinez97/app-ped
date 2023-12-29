import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Social = () => {



    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text>SEGUI LA NOSTRA COMMUNITY</Text>
            <View style={{
                display: 'grid',
                placeItems: 'center'
            }}>
                <MaterialCommunityIcons name="facebook" color={'blue'} size={26} />
                <MaterialCommunityIcons name="instagram" color={'rose'} size={26} />
                <MaterialCommunityIcons name="youtube" color={'red'} size={26} />
            </View>

        </View>
    );
};

export default Social;