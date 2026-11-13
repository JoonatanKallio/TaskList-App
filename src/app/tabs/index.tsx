import { Text, View, StyleSheet } from 'react-native';
import { themeColors } from '@/styles/theme';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>TaskList home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: themeColors.darkGray,
    },
});
