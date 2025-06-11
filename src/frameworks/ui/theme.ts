import { createSystem, defaultConfig } from '@chakra-ui/react';

// 테마 확장
export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#e3f2fd' },
          100: { value: '#bbdefb' },
          200: { value: '#90caf9' },
          300: { value: '#64b5f6' },
          400: { value: '#42a5f5' },
          500: { value: '#2196f3' }, // 주 색상
          600: { value: '#1e88e5' },
          700: { value: '#1976d2' },
          800: { value: '#1565c0' },
          900: { value: '#0d47a1' },
        },
        success: {
          500: { value: '#4caf50' },
        },
        warning: {
          500: { value: '#ff9800' },
        },
      },
    },
    config: {
      initialColorMode: 'light',
      useSystemColorMode: true,
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: 'md',
          fontWeight: 'normal',
        },
        variants: {
          solid: {
            bg: 'brand.500',
            color: 'white',
            _hover: {
              bg: 'brand.600',
            },
            _dark: {
              bg: 'brand.600',
              _hover: {
                bg: 'brand.700',
              },
            },
          },
          outline: {
            border: '1px solid',
            borderColor: 'brand.500',
            color: 'brand.500',
            _dark: {
              borderColor: 'brand.600',
              color: 'brand.600',
            },
          },
          ghost: {
            color: 'brand.500',
            _dark: {
              color: 'brand.600',
            },
          },
        },
      },
    },
    styles: {
      global: {
        body: {
          bg: 'white',
          color: 'gray.800',
          _dark: {
            bg: 'gray.800',
            color: 'white',
          },
        },
      },
    },
  },
});

export default system;
