tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "abc": {
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                    800: '#155e75',
                    900: '#164e63',
                }
            },
            borderRadius: {
                '8xl': '96rem'
            }
        }
    }
}

function DarkMode() {

    let mode = document.getElementById('main')

    if (mode.classList.contains('dark')) {
        mode.classList.remove('dark')
        mode.classList.add('')

    }
    else {
        mode.classList.add('dark')
    }

}

