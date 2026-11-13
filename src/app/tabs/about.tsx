import { Text, View, StyleSheet } from 'react-native';
import { themeColors } from '@/styles/theme';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: themeColors.darkGray,
    },
});
