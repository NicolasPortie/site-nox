import type { Localized, Product } from '../types';

export const products: Product[] = [
  {
    id: '01',
    name: 'NØR Tech Shell 01',
    category: { pt: 'Casaco', en: 'Jacket' },
    detail: { pt: 'Nylon / linha vermelha', en: 'Nylon / red line' },
    image: '/assets/optimized/nor-tech-shell.webp',
    modelImage: '/assets/optimized/nor-human-shell-detail.webp',
    imageAlt: {
      pt: 'Jaqueta NØR Tech Shell preta com logo no peito, Ø e linha vermelha no zíper',
      en: 'Black NØR Tech Shell jacket with chest logo, Ø and a red line on the zip',
    },
  },
  {
    id: '02',
    name: 'NØR Cargo 01',
    category: { pt: 'Calça', en: 'Pants' },
    detail: { pt: 'Cargo / bolsos', en: 'Cargo / pockets' },
    image: '/assets/optimized/nor-cargo-01.webp',
    modelImage: '/assets/optimized/nor-human-cargo-fit.webp',
    imageAlt: {
      pt: 'Calça cargo NØR preta com bolsos e etiqueta vermelha',
      en: 'Black NØR cargo pants with pockets and a red label',
    },
  },
  {
    id: '03',
    name: 'NØR 001',
    category: { pt: 'Tênis', en: 'Sneaker' },
    detail: { pt: 'Sola vermelha', en: 'Red sole' },
    image: '/assets/optimized/nor-001-sneaker.webp',
    modelImage: '/assets/optimized/nor-human-sneaker-fit.webp',
    imageAlt: {
      pt: 'Tênis NØR 001 preto com sola vermelha e logo no calcanhar',
      en: 'Black NØR 001 sneaker with a red sole and heel logo',
    },
  },
  {
    id: '04',
    name: 'NØR Core Tee',
    category: { pt: 'Camiseta', en: 'Tee' },
    detail: { pt: 'Algodão / etiqueta na barra', en: 'Cotton / hem label' },
    image: '/assets/optimized/nor-tee-01.webp',
    modelImage: '/assets/optimized/nor-human-tee-fit.webp',
    imageAlt: {
      pt: 'Camiseta preta NØR com logo branco e etiqueta vermelha na barra',
      en: 'Black NØR tee with white logo and a red hem label',
    },
  },
  {
    id: '05',
    name: 'NØR Signal Beanie',
    category: { pt: 'Gorro', en: 'Beanie' },
    detail: { pt: 'Malha / etiqueta vermelha', en: 'Knit / red label' },
    image: '/assets/optimized/nor-beanie-01.webp',
    modelImage: '/assets/optimized/nor-human-beanie-detail.webp',
    imageAlt: {
      pt: 'Gorro preto NØR com etiqueta vermelha e Ø',
      en: 'Black NØR beanie with a red label and Ø',
    },
  },
  {
    id: '06',
    name: 'NØR Signal Cap 01',
    category: { pt: 'Boné', en: 'Cap' },
    detail: { pt: 'Boné / Ø na lateral', en: 'Cap / Ø on the side' },
    image: '/assets/optimized/nor-signal-cap-01.webp',
    modelImage: '/assets/optimized/nor-human-cap-detail.webp',
    imageAlt: {
      pt: 'Boné NØR preto com patch vermelho e Ø na lateral',
      en: 'Black NØR cap with a red patch and Ø on the side',
    },
  },
  {
    id: '07',
    name: 'NØR Utility Tag',
    category: { pt: 'Bag', en: 'Bag' },
    detail: { pt: 'Bag / fita vermelha', en: 'Bag / red strap' },
    image: '/assets/optimized/nor-utility-01.webp',
    modelImage: '/assets/optimized/nor-human-utility-fit.webp',
    imageAlt: {
      pt: 'Bag NØR preta com fita vermelha e puxador Ø',
      en: 'Black NØR bag with a red strap and Ø pull',
    },
  },
  {
    id: '08',
    name: 'NØR Modular Vest 01',
    category: { pt: 'Colete', en: 'Vest' },
    detail: { pt: 'Ripstop / bolsos modulares', en: 'Ripstop / modular pockets' },
    image: '/assets/optimized/nor-modular-vest-01.webp',
    modelImage: '/assets/optimized/nor-human-woman-modular-vest.webp',
    imageAlt: {
      pt: 'Colete técnico NØR preto com gola alta, bolsos modulares, hardware Ø e straps laterais',
      en: 'Black NØR technical vest with high collar, modular pockets, Ø hardware and side straps',
    },
  },
];

export const lookbookStories: {
  src: string;
  label: Localized;
  alt: Localized;
}[] = [
  {
    src: '/assets/optimized/nor-human-look-beanie-catalog.webp',
    label: { pt: 'Gorro', en: 'Beanie' },
    alt: {
      pt: 'Homem com gorro, jaqueta, cargo e tênis NØR',
      en: 'Man in NØR beanie, jacket, cargo and sneaker',
    },
  },
  {
    src: '/assets/optimized/nor-human-woman-look-beanie-v2.webp',
    label: { pt: 'Gorro', en: 'Beanie' },
    alt: {
      pt: 'Mulher com gorro, jaqueta, cargo e tênis NØR',
      en: 'Woman in NØR beanie, jacket, cargo and sneaker',
    },
  },
  {
    src: '/assets/optimized/nor-human-look-cap-front.webp',
    label: { pt: 'Boné', en: 'Cap' },
    alt: {
      pt: 'Homem com boné, jaqueta, cargo e tênis NØR',
      en: 'Man in NØR cap, jacket, cargo and sneaker',
    },
  },
  {
    src: '/assets/optimized/nor-human-woman-look-cap.webp',
    label: { pt: 'Boné', en: 'Cap' },
    alt: {
      pt: 'Mulher com boné, jaqueta, cargo e tênis NØR',
      en: 'Woman in NØR cap, jacket, cargo and sneaker',
    },
  },
  {
    src: '/assets/optimized/nor-human-shell-detail.webp',
    label: { pt: 'Tech Shell', en: 'Tech Shell' },
    alt: { pt: 'Homem de jaqueta Tech Shell NØR', en: 'Man in the NØR Tech Shell jacket' },
  },
  {
    src: '/assets/optimized/nor-human-cargo-fit.webp',
    label: { pt: 'Cargo 01', en: 'Cargo 01' },
    alt: {
      pt: 'Homem de calça cargo NØR',
      en: 'Man in NØR cargo pants',
    },
  },
  {
    src: '/assets/optimized/nor-human-sneaker-fit.webp',
    label: { pt: 'NØR 001', en: 'NØR 001' },
    alt: { pt: 'Homem de tênis NØR 001', en: 'Man in the NØR 001 sneaker' },
  },
  {
    src: '/assets/optimized/nor-human-utility-fit.webp',
    label: { pt: 'Utility Tag', en: 'Utility Tag' },
    alt: {
      pt: 'Homem com a bag NØR cruzada',
      en: 'Man wearing the NØR bag across the body',
    },
  },
  {
    src: '/assets/optimized/nor-human-woman-modular-vest.webp',
    label: { pt: 'Modular Vest', en: 'Modular Vest' },
    alt: {
      pt: 'Mulher usando o colete Modular Vest NØR com camiseta, cargo e tênis 001',
      en: 'Woman wearing the NØR Modular Vest with tee, cargo pants and 001 sneaker',
    },
  },
];

export const marqueeNames = [
  'Tech Shell',
  'Cargo 01',
  'NØR 001',
  'Core Tee',
  'Signal Beanie',
  'Signal Cap',
  'Utility Tag',
  'Modular Vest',
];
