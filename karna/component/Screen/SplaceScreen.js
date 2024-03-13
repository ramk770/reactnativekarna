import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, Text, View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // Import from react-navigation if you're using it
import Home from './Welcomepage';
// Logo....
import Logo from '../../assets/logo1.jpg';

const BGColor = '#4D4A95';

export default function SplashScreen() {
    const navigation = useNavigation(); // Get navigation object

    // SafeArea Value...
    const edges = useSafeAreaInsets();

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    // Animation Done....
    useEffect(() => {
        // Starting Animation after 500ms....
        setTimeout(() => {
            // Parallel Animation...
            Animated.parallel([
                Animated.timing(startAnimation, {
                    toValue: Dimensions.get('window').height + (edges.top +0),
                    useNativeDriver: true,
                }),
                Animated.timing(scaleLogo, {
                    toValue: 0.3,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleTitle, {
                    toValue: 0.8,
                    useNativeDriver: true,
                }),
                Animated.timing(moveLogo, {
                    toValue: {
                        x: Dimensions.get('window').width / 2 - 35,
                        y: Dimensions.get('window').height / 2 - 5,
                    },
                    useNativeDriver: true,
                }),
                Animated.timing(moveTitle, {
                    toValue: {
                        x: 0,
                        y: Dimensions.get('window').height / 2 - 90,
                    },
                    useNativeDriver: true,
                }),
                Animated.timing(contentTransition, {
                    toValue: 0,
                    useNativeDriver: true,
                }),
            ]).start(() => {
                // Animation completed, navigate to WelcomeScreen
                navigation.navigate('welcome');
            });
        }, 500);
    }, []);

    // Going to Move Up like Nav Bar...
    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            }}>
            <Animated.View
                style={{
                    flex: 1,
                    backgroundColor: 'orange',
                    zIndex: 1,
                    transform: [{ translateY: startAnimation }],
                }}>
                <Animated.View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Animated.Image
                        source={Logo}
                        style={{
                            width: 150,
                            height: 150,
                            marginBottom: 20,
                            transform: [
                                { translateX: moveLogo.x },
                                { translateY: moveLogo.y },
                                { scale: scaleLogo },
                            ],
                        }}
                    />
                    <Animated.Text
                        style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            transform: [{ translateY: moveTitle.y }, { scale: scaleTitle }],
                        }}>
                        KARNA
                    </Animated.Text>
                </Animated.View>
            </Animated.View>

            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.04)',
                    zIndex: 0,
                    transform: [{ translateY: contentTransition }],
                }}>
                <Home />
            </Animated.View>
        </View>
    );
}
