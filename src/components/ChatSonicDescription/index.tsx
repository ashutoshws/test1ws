import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../Button";
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BrandGradientText from '../GradientText/BrandGradientText';


function ChatSonicDescription() {
    return (
        <View className="flex flex-col justify-between items-center py-5 gap-2 px-4 ">
            <Image source={require('../../../assets/icons/chatsonic-logo.svg')}
                style={{ height: wp('9%'), width: '100%', maxWidth: wp('50%') }}
            />
            <View className=''>
                <Text className='text-center'>
                    Let your creativity soar with your writing and art companion, providing top-of-the-line content on the latest topics.
                    <Text className="text-label-medium-bold text-purple-600 " >For FREE.</Text>

                </Text>         
            </View>
        </View>
    );
}
export default ChatSonicDescription;