import { Image } from 'expo-image';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Button from "../Button";
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
function QuickExamples() {
    return (
        <View className="flex px-4" style={{ height: hp('45%') }}>
            <View className="flex-1 flex flex-col self-stretch items-center p-4 gap-2 bg-gray-100 rounded-2xl">
                <Text className='text-label-xlarge-bold'>Quick examples of what you can do</Text>
                <ScrollView horizontal={false} className='flex flex-col gap-4' >
                    <IndivudalFeature />
                    <IndivudalFeature />
                    <IndivudalFeature />
                    <IndivudalFeature />
                    <IndivudalFeature />
                </ScrollView>
            </View>

        </View>
    );
}
export default QuickExamples;

function IndivudalFeature() {

    return (<Button>

        <View className="border border-gray-200 rounded-2xl border-solid py-2.5 px-3.5 flex flex-row gap-3 bg-white my-1">
            <Image source={require('../../../assets/icons/pencil-icon.svg')}
                style={{ height: wp('9%'), width: wp('9%') }}
                className="rounded-full overflow-hidden" />
            <View className="flex flex-col gap-2" style={{ width: wp('67%') }}>

                <Text className='text-label-medium-bold text-sm'>Write factual content on the latest topics, including today's news</Text>
                <Text className='text-label-medium-regular text-sm'>Which teams reached the quarter finals in the FIFA World Cup Qatar 2022?</Text>
            </View>
        </View>
    </Button>);
}
