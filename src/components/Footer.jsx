import React from 'react';
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';
import { navigate } from '../router/NavigationRef';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export const Footer = ({
                  focus,
                  color
}) => {

  const listFooter = [
    {id: 0, text: 'Usuarios', action: 'Home' ,icon:'user'},
    {id: 1, text: 'Imagenes', action: 'Images',icon:'image'},
    {id: 2, text: 'Bluetooth', action: 'Bluethooth',icon:'bluetooth'},
  ];
  return(
    <View style={style.container}>
      <View style={style.containerFooter}>
        {listFooter.map((list, index) => (
            <TouchableOpacity key={list.id}
              onPress={() => navigate(list.action)}>
                <View
                     style={style.containerIcon}
                >
                    <Icon  size={hp(3)} name={list.icon} color={focus === list.text ? color: '#707070'} />
                    <Text style={{...style.text, color:focus === list.text ? color : '#707070'}}>{list.text}</Text>
                </View>
            </TouchableOpacity>
        ))}
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: wp('100%'),
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: wp(5),
    borderTopLeftRadius: wp(5),
  },
  containerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('90%'),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  containerIcon: {
    alignItems: 'center',
    marginTop: hp('1%'),
    marginLeft: wp(1),
  },
  text: {
    fontSize: wp(3),
    marginBottom: hp(2),
    fontWeight: 'bold',
  },
});

