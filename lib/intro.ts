export const INTRO_STORAGE_KEY = 'portfolio:intro:v1';
export const THEME_STORAGE_KEY = 'portfolio:theme';

/**
 * Runs before first paint (inlined in <head>):
 * - applies the saved theme, or the system one, so there is no light/dark flash;
 * - plays the terminal intro once per session, never for reduced-motion users,
 *   never without JavaScript.
 */
export const INTRO_BOOT_SCRIPT = `(function(){var d=document.documentElement;try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark)d.classList.add('dark')}catch(e){}try{if(sessionStorage.getItem('${INTRO_STORAGE_KEY}'))return;if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('intro-playing')}catch(e){}})();`;
