import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

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
          <TouchableOpacity onPress={() => handleDelete(id, nome)}>
            <Text style={styles.deleteButtonText}>Excluir</Text>
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
    backgroundColor: '#b60000',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    paddingVertical: 10,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: '#b60000',
    justifyContent: 'center',
    padding: 10,
    width: 70, // Define a largura da área de deslizar
    alignItems: 'center',
    height: '100%',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});