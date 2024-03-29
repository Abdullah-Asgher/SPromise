import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  RemoveSoicalLinkApprovalState,
  RemoveTwitterApicall,
} from '../../recoil/Users/GetUsers';
import {useRecoilState} from 'recoil';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {commonStyles} from '../../Styling/buttons';
import {UserNo} from '../../recoil/AddPromise';
import {ToastAndroid} from 'react-native';
import AccountRemovedApiCall from '../../Network/Users/RemoveUserSocialAccounts/TwitterAccountRemoveApiCall';

const RemoveSoicalLinkApproval = () => {
  // const [isModalVisible, setModalVisible] = useState(false);
  const [istwitterRemoveAccount, setIstwitterRemoveAccount] =
    useRecoilState(RemoveTwitterApicall);
  const [removeSLAModal, setRemoveSLAModal] = useRecoilState(
    RemoveSoicalLinkApprovalState,
  );
  const [userN, setUserN] = useRecoilState(UserNo);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleYes = async () => {
    const Platform = istwitterRemoveAccount ? 'Twitter' : 'LinkedIn';
    const res = await AccountRemovedApiCall(userN, Platform);
    console.log(res);
    // Handle the 'Yes' option
    // toggleModal();

    // istwitterRemoveAccount ? (
    //     console.log('Twitter  Call')

    //      // ToastAndroid.showWithGravityAndOffset(
    // //   'Account has been removed',
    // //   ToastAndroid.LONG,
    // //   ToastAndroid.BOTTOM,
    // //   25,
    // //   50,)

    // ) : (
    //     console.log('Linkdin account has been removed Call')
    // );

    setRemoveSLAModal(false);
  };

  const handleNo = () => {
    // Handle the 'No' option
    // toggleModal();

    setRemoveSLAModal(false);
  };
  return (
    <View
      style={{
        // marginTop: heightPercentageToDP(30),
        height: heightPercentageToDP(30),
        // borderWidth: heightPercentageToDP(0.4),
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: widthPercentageToDP(10)

        borderWidth: 0.5,
        width: widthPercentageToDP(90),
        alignSelf: 'center',
        borderRadius: widthPercentageToDP(2),
        borderColor: '#652D90',
        // marginHorizontal:wp(3),
        // height: hp(58),
        // marginTop: hp(20),
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: heightPercentageToDP(3.5)}}>
        Do you want to proceed?
      </Text>
      <View
        style={{
          marginTop: heightPercentageToDP(2),
          flexDirection: 'row',
          width: widthPercentageToDP(90),
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={handleYes}
          style={[commonStyles.SignUpBtn, {width: widthPercentageToDP(38)}]}>
          <Text>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNo}
          style={[
            commonStyles.SignUpBtn,
            {width: widthPercentageToDP(38), backgroundColor: 'red'},
          ]}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RemoveSoicalLinkApproval;

const styles = StyleSheet.create({});
