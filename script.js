(function() {
    const isDarkMode  = window.matchMedia('(prefers-color-scheme: dark)').matches;

    function themeChangeHandler(e) {
    if (e) {
        console.log('切换到深色模式');
        document.documentElement.classList.add("bili_dark") ;
    } else {
        console.log('切换到浅色模式');
        document.documentElement.classList.remove("bili_dark");
    }
    }

    mediaQuery.addEventListener('change', themeChangeHandler);

})();