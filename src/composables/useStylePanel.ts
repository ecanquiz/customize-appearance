import { ref, watch } from 'vue';

import type { Styles, StylePanelProps, StylePanelEmits  } from '@/types/styles';

const useStylePanel =  function(props: StylePanelProps, emits: StylePanelEmits) {
  const localStyles = ref({...props.styles});

  watch(() => props.styles, (newVal) => {
    localStyles.value = {...newVal};
  }, { deep: true });

  const updateStyles = () => {
    emits('update-styles', {...localStyles.value});
  };

  const validateColor = (field: keyof Styles) => {
    console.log(field)
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (!hexColorRegex.test(localStyles.value[field])) {
      alert('Por favor ingresa un valor hexadecimal válido (ej. #ffffff)');
      localStyles.value[field] = props.styles[field];
    } else {
      updateStyles();
    }
  };

  const resetStyles = () => {
    emits('update-styles', {
      backgroundColor: '#ffffff',
      textColor: '#333333',
      primaryColor: '#42b983',
      titleColor: '#2c3e50',
      headerBackground: '#f8f9fa',
      footerBackground: '#f8f9fa'
    });
  };

  return {
    localStyles,

    resetStyles,
    updateStyles,
    validateColor
  }

};

export default useStylePanel;