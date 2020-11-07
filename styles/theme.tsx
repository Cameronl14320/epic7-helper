import colors from './colors'

export default {
    header: {
        padding: '20px 0px 20px 10px',
        background: colors.primary,
        color: colors.text,
    },
    header_layout: {
        listStyleType: 'none',
        overflow: 'hidden',
        margin: 0,
        padding: '5px 0px 5px 0px',
    },
    header_buttons: {
        margin: [1, 2],
        fontSize: [2, 3, 4],
        background: colors.test,
        display: 'inline',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: 'bold' as 'bold',
        ':hover': {
            color: colors.test,
        },
    },
    buttons: {
        colors: {
            primary: 'black',
            text: 'white',
        }
    },
}