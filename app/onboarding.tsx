import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

import { PlantlyButton } from "@/components/PlantlyButton";
import { PlantlyImage } from "@/components/PlantlyImage";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -10,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => animation.stop();
  }, [translateY]);

  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/");
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="inverted" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>
          Keep your plants healthy and hydrated
        </Text>
      </View>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <PlantlyImage />
      </Animated.View>
      <PlantlyButton title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 24,
    color: theme.colorWhite,
    textAlign: "center",
  },
});
