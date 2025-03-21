import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';
import { Light } from '@/constants/Colors';

const SwipeToDelete = ({ children, id, handleDelete, nome }: any) => {
  // Função para renderizar as ações de deslizar (Excluir)
  const renderRightActions = (progress: any, dragAnimatedValue: any) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-50, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.swipedRow}>
        {/* Animação do botão de excluir */}
        <Animated.View style={[styles.deleteButton, { opacity }]}>
          <TouchableOpacity 
            style={styles.deleteButtonContainer}
            onPress={() => handleDelete(id, nome)}
          >            
            <Text style={styles.deleteButtonText}>Excluir</Text>
            <Icon source="delete" size={18} color={Light.onPrimary} />          
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      rightThreshold={50} // Limita o deslize do item a 50 unidades
      friction={2} // Controla a resistência ao deslize
      overshootRight={false} // Impede que o item ultrapasse a área de deslize
    >
      {children}
    </Swipeable>
  );
};

export default SwipeToDelete;

const styles = StyleSheet.create({
  swipedRow: {
    flexDirection: 'row',
    backgroundColor: Light.error,
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    height: '95%',
    borderRadius: 5,
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 1
  },
  deleteButton: {
    backgroundColor: Light.error,
    justifyContent: 'center',
    width: 90, // Define a largura da área de deslizar
    alignItems: 'center',
    alignSelf: 'center',
    height: '90%',
  },
  deleteButtonText: {
    color: Light.onPrimary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});