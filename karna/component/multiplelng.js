import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { en, es, ja } from './language';
import { useState, useEffect } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

function Multiplelng() {
  const [locale, setLocale] = useState(Localization.locale);

  useEffect(() => {
    // Initialize i18n when the component mounts
    i18n.fallbacks = true;
    i18n.translations = { en, es, ja };
    i18n.locale = locale;
  }, [locale]);

  return (
    <View style={styles.container}>
      {locale !== "en" ? <Button title="Switch to English" onPress={() => setLocale("en")} /> : undefined}
      {locale !== "es" ? <Button title="Switch to Spanish" onPress={() => setLocale("es")} /> : undefined}
      {locale !== "ja" ? <Button title="Switch to Japanese" onPress={() => setLocale("ja")} /> : undefined}
      <Text>{i18n.t('appName')}</Text>
      <Text>{i18n.t('welcome')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Multiplelng;
