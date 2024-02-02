import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useIsFocused} from '@react-navigation/native';
import getAllUsersForAdminPanelApi from '../../Network/AdminPanel/GetAllUsersAPI';


const AllUsers = () => {

    const focus = useIsFocused();
    const [allUsers,setAllUsers] = useState([])
    const [isLoading,setIsLoading] = useState(true);

    const featchAllUsers = async ()=>{
        console.log("featchAllUsers Call")
        const res = await getAllUsersForAdminPanelApi();

    }

     useEffect(() => {
        featchAllUsers();
  }, [focus]);

  return (
    <View>
      <Text>AllUsers</Text>
    </View>
  )
}

export default AllUsers

const styles = StyleSheet.create({})