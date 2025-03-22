import { Image, ImageProps } from 'expo-image';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

export function ImageBackground({
    children, style, width = 200, height = 200, ...props }: ImageProps &
    { width?: number; height?: number }) {
        
    const isAndroid = Platform.OS === 'android';

    if (isAndroid) {
        return (
            <View style={styles.container}>
                <Image {...props} style={[style, { width, height }]} contentFit="contain" />
                <View style={[styles.children, StyleSheet.absoluteFill]}>
                    {children}
                </View>
            </View>
        );
    }

    return <Image {...props} style={style}>{children}</Image>;
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    children: {
        zIndex: 1,
    },
});
