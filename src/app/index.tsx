import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text>TaskList</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
