import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#FFFFFF' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contatos</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="Maria Júlia">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold">(41)XXXX-XXXX</ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}

        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Jurema Andrade">
        <ThemedText>
          (41)XXXX-XXXX{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Fulano Cicrano Nogueira">
        <ThemedText>
          (41)XXXX-XXXX<ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>

        </ThemedText>

        <ExternalLink href="">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Jesus Amado da Silva Paes">
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText>
            (98)XXXX-XXXX</ThemedText>
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Mateus Docyllo">
        <ThemedText>
          (51)XXXX-XXXX{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Jurescleia Olia">
        <ThemedText>
          (33)XXXX-XXXX{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}

        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#FFFFFF',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
