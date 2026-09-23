// Dados dos 3 produtos, extraídos direto do droid.html, laptop.html e sunglasses.html
// Uma única página (ProductPage) usa esses dados pra renderizar qualquer um dos 3

export interface Spec {
  label: string
  value: string
}

export interface Product {
  slug: string
  title: string
  image: string
  heroDescription: string
  price: string
  priceDescription: string
  specs: Spec[]
}

export const products: Product[] = [
  {
    slug: 'droid',
    title: 'ACE DROID',
    image: 'droid.png',
    heroDescription:
      "The Ace Droid is more than an assistant — it is a presence. A flawlessly balanced sphere of titanium and light, engineered to move through your home as naturally as it moves through your routine. It listens, it learns, and it anticipates, all while remaining silent enough to feel like part of the room rather than a machine within it.",
    price: '$24,900',
    priceDescription:
      'Every Ace Droid is hand-calibrated before it leaves the workshop, its neural core fine-tuned to the rhythms of a single household. Beneath its ceramic-coated shell lies a suspension system that allows silent, frictionless movement across any surface, while its adaptive learning array grows more attuned to your habits with every passing week.',
    specs: [
      { label: 'Shell', value: 'Aerospace-grade titanium with matte ceramic coating' },
      { label: 'Core', value: 'AceOS Neural Processing Unit, 12-core adaptive array' },
      { label: 'Mobility', value: 'Six-axis magnetic levitation propulsion' },
      { label: 'Battery', value: '72-hour solid-state cell, wireless induction charging' },
      { label: 'Sensors', value: '360° LiDAR mapping, ambient emotion recognition' },
      { label: 'Weight', value: '2.3kg' },
    ],
  },
  {
    slug: 'laptop',
    title: 'ACEBOOK',
    image: 'laptop.png',
    heroDescription:
      "The AceBook is where precision engineering meets quiet luxury. Powered by the exclusive AceOS, this computing masterpiece features a tactile magnetic keyboard, unmatched trackpad precision, and a breathtaking MicroLED display that renders every pixel with jeweler's clarity. Milled from a single block of aerospace-grade aluminum, it is as capable of driving your most demanding work as it is of sitting silently on a desk, a study in restraint and craft.",
    price: '$32,600',
    priceDescription:
      'Every AceBook is assembled by hand in a single sitting, its unibody chassis machined to a tolerance of microns before the AceOS core is calibrated and sealed. The magnetic keyboard mechanism is tuned individually for silent, responsive travel, while the MicroLED panel is hand-inspected under studio lighting to guarantee flawless color fidelity from the moment it reaches you.',
    specs: [
      { label: 'Chassis', value: 'Unibody aerospace-grade aluminum, hand-polished finish' },
      { label: 'Core', value: 'AceOS Neural Processing Unit, 16-core adaptive array' },
      { label: 'Display', value: '16" MicroLED, jeweler-grade color calibration' },
      { label: 'Input', value: 'Tactile magnetic keyboard, precision haptic trackpad' },
      { label: 'Battery', value: '48-hour solid-state cell, wireless induction charging' },
      { label: 'Weight', value: '1.1kg' },
    ],
  },
  {
    slug: 'sunglasses',
    title: 'ACE GLASSES',
    image: 'sunglasses.png',
    heroDescription:
      'Ace Glasses redefine what a pair of frames can do. Behind lenses indistinguishable from ordinary glass lies a full augmented reality layer, quietly overlaying the world with information, translation, and connection — without ever breaking eye contact with the person in front of you.',
    price: '$18,400',
    priceDescription:
      'Each pair of Ace Glasses is built around a micro-projection system embedded directly into the temple, invisible even under close inspection. Bone-conduction audio replaces speakers entirely, keeping your ears free while every word spoken around you can be translated in real time, and every unfamiliar street instantly annotated before your eyes.',
    specs: [
      { label: 'Frame', value: 'Aerospace-grade titanium, hand-polished acetate tips' },
      { label: 'Lenses', value: 'Waveguide micro-projection display, anti-glare coating' },
      { label: 'Audio', value: 'Dual bone-conduction transducers' },
      { label: 'Translation', value: '84 languages, real-time omni-translation' },
      { label: 'Battery', value: '18-hour cell, magnetic case charging' },
      { label: 'Weight', value: '34g' },
    ],
  },
]
