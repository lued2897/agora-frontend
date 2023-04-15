const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents, theme }){
    addComponents({
        ".navbar": {
            height: '43px',
            /*margin-top se usa como marginTop*/
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            ".navbar__logo":{
                width: '154px',
                height:'100%'
            },
            ".navbar__buttons": {
                display: 'flex',
                justifyContent: 'space-between',
                gap:'35px',
                'button': {
                    width: '32px',
                    height: '32px'
                }
            }
        }
    })
})

