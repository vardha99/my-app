import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check the user's system preference on initial load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Function to handle theme changes
    const handleThemeChange = (e:any) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme); // Save the theme preference
    };

    // Add event listener for theme changes
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQueryList.addEventListener('change', handleThemeChange);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQueryList.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return theme;
};

export default useTheme;
