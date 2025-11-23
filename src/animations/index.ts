import type { Animation } from '../store';
import * as Buttons from './buttons';
import * as Cards from './cards';
import * as Icons from './icons';
import * as Text from './text';
import * as Loaders from './loaders';
import * as Modals from './modals';

export const animations: Animation[] = [
  // Button Animations (10)
  { id: 'button-bounce', name: 'Button Bounce', category: 'Buttons', component: Buttons.ButtonBounce },
  { id: 'button-pulse', name: 'Button Pulse', category: 'Buttons', component: Buttons.ButtonPulse },
  { id: 'button-shake', name: 'Button Shake', category: 'Buttons', component: Buttons.ButtonShake },
  { id: 'button-slide', name: 'Button Slide', category: 'Buttons', component: Buttons.ButtonSlide },
  { id: 'button-rotate', name: 'Button Rotate', category: 'Buttons', component: Buttons.ButtonRotate },
  { id: 'button-glow', name: 'Button Glow', category: 'Buttons', component: Buttons.ButtonGlow },
  { id: 'button-flip', name: 'Button Flip', category: 'Buttons', component: Buttons.ButtonFlip },
  { id: 'button-expand', name: 'Button Expand', category: 'Buttons', component: Buttons.ButtonExpand },
  { id: 'button-squeeze', name: 'Button Squeeze', category: 'Buttons', component: Buttons.ButtonSqueeze },
  { id: 'button-jiggle', name: 'Button Jiggle', category: 'Buttons', component: Buttons.ButtonJiggle },

  // Card Animations (10)
  { id: 'card-float', name: 'Card Float', category: 'Cards', component: Cards.CardFloat },
  { id: 'card-tilt', name: 'Card Tilt', category: 'Cards', component: Cards.CardTilt },
  { id: 'card-flip', name: 'Card Flip', category: 'Cards', component: Cards.CardFlip },
  { id: 'card-zoom', name: 'Card Zoom', category: 'Cards', component: Cards.CardZoom },
  { id: 'card-bounce', name: 'Card Bounce', category: 'Cards', component: Cards.CardBounce },
  { id: 'card-slide', name: 'Card Slide', category: 'Cards', component: Cards.CardSlide },
  { id: 'card-rotate', name: 'Card Rotate', category: 'Cards', component: Cards.CardRotate },
  { id: 'card-expand', name: 'Card Expand', category: 'Cards', component: Cards.CardExpand },
  { id: 'card-shake', name: 'Card Shake', category: 'Cards', component: Cards.CardShake },
  { id: 'card-pulse', name: 'Card Pulse', category: 'Cards', component: Cards.CardPulse },

  // Icon Animations (10)
  { id: 'icon-spin', name: 'Icon Spin', category: 'Icons', component: Icons.IconSpin },
  { id: 'icon-bounce', name: 'Icon Bounce', category: 'Icons', component: Icons.IconBounce },
  { id: 'icon-wobble', name: 'Icon Wobble', category: 'Icons', component: Icons.IconWobble },
  { id: 'icon-pulse', name: 'Icon Pulse', category: 'Icons', component: Icons.IconPulse },
  { id: 'icon-flip', name: 'Icon Flip', category: 'Icons', component: Icons.IconFlip },
  { id: 'icon-grow', name: 'Icon Grow', category: 'Icons', component: Icons.IconGrow },
  { id: 'icon-shrink', name: 'Icon Shrink', category: 'Icons', component: Icons.IconShrink },
  { id: 'icon-shake', name: 'Icon Shake', category: 'Icons', component: Icons.IconShake },
  { id: 'icon-float', name: 'Icon Float', category: 'Icons', component: Icons.IconFloat },
  { id: 'icon-blink', name: 'Icon Blink', category: 'Icons', component: Icons.IconBlink },

  // Text Animations (10)
  { id: 'text-fade', name: 'Text Fade', category: 'Text', component: Text.TextFade },
  { id: 'text-slide-up', name: 'Text Slide Up', category: 'Text', component: Text.TextSlideUp },
  { id: 'text-slide-down', name: 'Text Slide Down', category: 'Text', component: Text.TextSlideDown },
  { id: 'text-slide-left', name: 'Text Slide Left', category: 'Text', component: Text.TextSlideLeft },
  { id: 'text-slide-right', name: 'Text Slide Right', category: 'Text', component: Text.TextSlideRight },
  { id: 'text-scale', name: 'Text Scale', category: 'Text', component: Text.TextScale },
  { id: 'text-rotate', name: 'Text Rotate', category: 'Text', component: Text.TextRotate },
  { id: 'text-bounce', name: 'Text Bounce', category: 'Text', component: Text.TextBounce },
  { id: 'text-wave', name: 'Text Wave', category: 'Text', component: Text.TextWave },
  { id: 'text-glow', name: 'Text Glow', category: 'Text', component: Text.TextGlow },

  // Loader Animations (10)
  { id: 'loader-spinner', name: 'Loader Spinner', category: 'Loaders', component: Loaders.LoaderSpinner },
  { id: 'loader-dots', name: 'Loader Dots', category: 'Loaders', component: Loaders.LoaderDots },
  { id: 'loader-bars', name: 'Loader Bars', category: 'Loaders', component: Loaders.LoaderBars },
  { id: 'loader-pulse', name: 'Loader Pulse', category: 'Loaders', component: Loaders.LoaderPulse },
  { id: 'loader-ripple', name: 'Loader Ripple', category: 'Loaders', component: Loaders.LoaderRipple },
  { id: 'loader-square', name: 'Loader Square', category: 'Loaders', component: Loaders.LoaderSquare },
  { id: 'loader-circle', name: 'Loader Circle', category: 'Loaders', component: Loaders.LoaderCircle },
  { id: 'loader-wave', name: 'Loader Wave', category: 'Loaders', component: Loaders.LoaderWave },
  { id: 'loader-orbit', name: 'Loader Orbit', category: 'Loaders', component: Loaders.LoaderOrbit },
  { id: 'loader-bounce', name: 'Loader Bounce', category: 'Loaders', component: Loaders.LoaderBounce },

  // Modal/Notification Animations (10)
  { id: 'modal-fade', name: 'Modal Fade', category: 'Modals', component: Modals.ModalFadeIn },
  { id: 'modal-slide-up', name: 'Modal Slide Up', category: 'Modals', component: Modals.ModalSlideUp },
  { id: 'modal-slide-down', name: 'Modal Slide Down', category: 'Modals', component: Modals.ModalSlideDown },
  { id: 'modal-scale', name: 'Modal Scale', category: 'Modals', component: Modals.ModalScale },
  { id: 'notification-slide-right', name: 'Notification Slide Right', category: 'Modals', component: Modals.NotificationSlideRight },
  { id: 'notification-slide-left', name: 'Notification Slide Left', category: 'Modals', component: Modals.NotificationSlideLeft },
  { id: 'notification-bounce', name: 'Notification Bounce', category: 'Modals', component: Modals.NotificationBounce },
  { id: 'notification-shake', name: 'Notification Shake', category: 'Modals', component: Modals.NotificationShake },
  { id: 'notification-fade-slide', name: 'Notification Fade Slide', category: 'Modals', component: Modals.NotificationFadeSlide },
  { id: 'notification-pop', name: 'Notification Pop', category: 'Modals', component: Modals.NotificationPop },
];

export const categories = Array.from(new Set(animations.map(a => a.category)));
