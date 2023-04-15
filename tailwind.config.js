/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        100: '#396EB0',
        200: '#2B5284',
      },
      'red': {
        100: '#FED3C0',
        200: '#F86A61',
        300: '#B2303E',
      },
      'gray': {
        100: '#9BAAAA',
        200: '#657172'
      },
      'white': {
        100: '#FFFFFF',
        200: '#F2F7F6'
      },
    },
    extend: {
      backgroundImage: {
        'agora': 'url("./assets/icons/Agora.svg")',
        'agora_auth': 'url("./assets/icons/Agora-auth.svg")',
        'agora_icon': 'url("./assets/icons/Agora-icon.svg")',
        'inbox_stack': 'url("./assets/icons/inbox-stack.svg")',
        'shopping_bag': 'url("./assets/icons/shopping-bag.svg")',
        'shopping_bag_dark': 'url("./assets/icons/shopping-bag-dark.svg")',
        'user': 'url("./assets/icons/user.svg")',
      }
    },
  },
  plugins: [
    require("./src/theme/image.js"),
    require("./src/theme/card.js"),
    require("./src/theme/navbar.js")
  ],
}

