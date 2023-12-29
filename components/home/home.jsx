import React from 'react';
import { View , ScrollView} from 'react-native';
import Drawer from '../form/drawer';
import CarouselCards from '../carouselCard/carouselCard';
import Social from '../form/social'

const Home = () => {
    return (
        <ScrollView>
            <View>
            <Drawer />
            <CarouselCards></CarouselCards>
            <Social></Social>
        </View>
        </ScrollView>
        
    );
}
export default Home;