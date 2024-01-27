import { Image } from 'expo-image';
import { Text, View } from "react-native";
import Button from "../Button";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DEFAULT_HEADER_TEXT = "ChatSonic"
function Header() {
    return (
        <View className="flex flex-row justify-between items-center px-4 py-2 pt-0">
            <View className="absolute left-0 right-0 flex-row items-center justify-center">
                <Text className="text-gray-900 text-label-large-bold "
                    style={{ fontSize: wp('5%') }}

                >{DEFAULT_HEADER_TEXT}</Text>
            </View>

            <Button className='p-1 pl-0' onPress={() => alert('menu')}>
                <Image source={require('../../../assets/icons/menu.svg')}
                    style={{ height: wp('9%'), width: wp('9%') }}
                />
            </Button>

            <View className="flex flex-row  justify-center items-center gap-2">
                <Button className="p-1">
                    <Image source={require('../../../assets/icons/bell.svg')}
                        className='relative'
                        style={{ height: wp('8%'), width: wp('8%') }}
                    />
                </Button>
                <Button className="p-1 pr-0 rounded-full overflow-hidden"  style={{ height: wp('9%'), width: wp('9%') }}>
                    <Image source={require('../../../assets/images/profile.jpg')}
                        style={{ height: wp('9%'), width: wp('9%') }}
                        className="rounded-full overflow-hidden"
                    />
                </Button>
            </View>



        </View>
    );
}
export default Header;