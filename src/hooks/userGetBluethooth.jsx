import { useEffect, useState } from 'react';
import BleManager from 'react-native-ble-manager';
import { NativeModules,PermissionsAndroid,NativeEventEmitter, Platform } from 'react-native';
export const useGetBluethooth = () => {
    const [permissions, setPermissions] = useState(false)
    const [list, setList] = useState([]);
    const [isScanning, setIsScanning] = useState(false);
    const peripherals = new Map();
    const BleManagerModule = NativeModules.BleManager;
    const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
    const initBluethooth=()=>{
        BleManager.start({ showAlert: false });
        bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', handleDiscoverPeripheral);
        bleManagerEmitter.addListener('BleManagerStopScan', handleStopScan );
        if (Platform.OS === 'android' && Platform.Version >= 23) {
            PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION && PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION ).then((result) => {
                if (result) {
                  setPermissions(true);
                } else {
                  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
                    if (result) {
                    //   setPermissions(true);
                    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION ).then((result) => {
                        if (result) {
                          setPermissions(true);
                        } else {
                          setPermissions(false);
                          alert('Debe aceptar el permiso')
                        }
                      });
                    } else {
                      setPermissions(false);
                      alert('Debe aceptar el permiso')
                    }
                  });
                }
            });
        }
    }


    const handleDiscoverPeripheral = (peripheral) => {
        if (!peripheral.name) {
          peripheral.name = 'NO NAME';
        }
        peripherals.set(peripheral.id, peripheral);
        setList(Array.from(peripherals.values()));
    }
    
    const startScan = () => {
        if (!isScanning) {
            BleManager.scan([], 10, true).then(() => {
              setIsScanning(true);
            }).catch(err => {
              console.error(err);
            });
        }  
    }
    const handleStopScan = () => {
        setIsScanning(false);
    }

    useEffect(() => {
        initBluethooth();
    }, [])

    return {permissions,startScan,isScanning,list}
  }