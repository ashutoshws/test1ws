import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../Button";
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


function Filter() {
    return (
        <View className="flex flex-row justify-between items-center py-2.5 px-4  border-0 border-b border-b-gray-200">
            <GradientFliter />
            <Button className='flex flex-row gap-1 bg-purple-100 px-2 py-1 rounded-[10px]'>
                <>
                    <Image source={require('../../../assets/icons/play-icon.svg')}
                        className='relative'
                        style={{ height: 24, width: 24 }} />
                    <Text className="text-label-small-bold text-purple-600">Watch a demo</Text>
                </>
            </Button>
        </View>
    );
}
export default Filter;

function GradientFliter() {
    return (<TouchableOpacity>
        <LinearGradient
            colors={['rgba(0, 205, 250, 0.30)', 'rgba(144, 88, 255, 0.30)', 'rgba(255, 118, 223, 0.30)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ paddingHorizontal: 6, paddingVertical: 3, gap: 1.5, borderRadius: 8 }}
        >
            <View className="flex flex-row rounded-lg gap-1.5 py-1">
                <Text className="text-label-medium-regular">Personality:</Text>
                <View className="px-1 flex flex-row bg-white/60 items-center rounded-md">
                    <Text className="text-label-medium-bold">Fitness Trainer</Text>
                    <Image source={require('../../../assets/icons/arrow-down.svg')}
                        className='relative'
                        style={{ height: 12, width: 12 }} />
                </View>
            </View>
        </LinearGradient>
    </TouchableOpacity>);
}
