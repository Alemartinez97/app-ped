import React from 'react';
import { View , ScrollView} from 'react-native';
import Drawer from '../form/drawer';
import CarouselCards from '../carouselCard/carouselCard';

const Home = () => {
    return (
        <ScrollView>
            <View>
            <Drawer />
            <CarouselCards></CarouselCards>
        </View>
        </ScrollView>
        
    );
}
export default Home;