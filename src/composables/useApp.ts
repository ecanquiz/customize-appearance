import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import type { Styles } from '@/types/styles'
import type { TestAPI } from '@/types/testApi'


const useApp =  function () {
  const defaultStyles: Styles = {
    backgroundColor: '#ffffff',
    textColor: '#333333',
    primaryColor: '#42b983',
    titleColor: '#2c3e50',
    headerBackground: '#f8f9fa',
    footerBackground: '#f8f9fa'
  };

  const currentStyles:Ref<Styles> = ref({...defaultStyles});

  const loadSavedStyles = () => {
    const savedStyles = localStorage.getItem('themeStyles');
    if (savedStyles) {
      currentStyles.value = {...defaultStyles, ...JSON.parse(savedStyles)};
    }
  };

  onMounted(loadSavedStyles);

  const handleStyleUpdate = (newStyles: Partial<Styles>) => {
    currentStyles.value = {...currentStyles.value, ...newStyles};
  
    localStorage.setItem('themeStyles', JSON.stringify(newStyles));
  };

  return {
    currentStyles,

    handleStyleUpdate,
    _test: { loadSavedStyles } as TestAPI
  }
};

export default useApp;