import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import colors from '../../../../theme/colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { typography } from '../../../../theme';
import constants from '../../../../core/constants/constants';
import styles from './LoginButton.styles';

interface Props {
  onPress: () => void;
  isSubmitting: boolean;
}

export default function LoginButton({ onPress, isSubmitting }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isSubmitting && styles.disabledButton]}
        onPress={onPress}
        disabled={isSubmitting}
      >
        <Text style={styles.buttonText}>
          {isSubmitting ? 'Logging in...' : 'LOGIN'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
