import { NativeTabs } from 'expo-router/native-tabs';
import { themeColors } from '@/styles/theme';

export default function TabLayout() {
    return (
        <NativeTabs tintColor={themeColors.darkRed}>
            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon
                    sf={{ default: 'house', selected: 'house.fill' }}
                    md="home"
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="about">
                <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon
                    sf={{
                        default: 'info.circle',
                        selected: 'info.circle.fill',
                    }}
                    md="info"
                />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
