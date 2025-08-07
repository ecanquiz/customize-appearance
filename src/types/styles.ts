import type { HexColor } from './colors'

export type Styles = {
  backgroundColor: HexColor;
  textColor: HexColor;
  primaryColor: HexColor;
  titleColor: HexColor;
  headerBackground: HexColor;
  footerBackground: HexColor;
}

export type StylePanelProps = {
  styles: Styles;
}

export type StylePanelEmits = {
  (e: 'update-styles', localStyles: Styles): void;
}

