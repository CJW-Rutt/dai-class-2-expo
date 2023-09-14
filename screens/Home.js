import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Radio, RadioGroup, Input, Avatar, Icon, IconElement } from '@ui-kitten/components';
import { useState } from 'react';

export default function Home({navigation}) {

    const [counter, setCounter] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                PRESS BUTTON FOR FUN!
            </Text>
            <Button onPress={() => setCounter(counter + 1)}>
                BUTTON
            </Button>
            <Text style={styles.text}>
                {`Pressed ${counter} times`}
            </Text>
            <Text style={styles.title} >
                CHOOSE YOUR OPTION!
            </Text>
            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => setSelectedIndex(index)}
            >
                <Radio>
                    Option 1 
                </Radio>
                <Radio>
                    Option 2
                </Radio>
                <Radio>
                    Option 3
                </Radio>
            </RadioGroup>
            <Text category='h6'>
                {`Selected Option: ${selectedIndex + 1}`}
            </Text>
            <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Avatar
                style={styles.avatar}
                size='giant'
                source={require('../assets/icon.png')}
            />
            <Icon
                style={styles.icon}
                fill='#8F9BB3'
                name='star'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },

});
