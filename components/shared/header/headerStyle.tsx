import theme from '../../../styles/theme'
import colors from '../../../styles/colors'

export default {
    header: {
        background: colors.primary,
        color: colors.text,
        padding: '20px 0px 20px 10px',
    },
    header_layout: {
        listStyleType: 'none',
        overflow: 'hidden',
        margin: 0,
        padding: '5px 0px 5px 0px',
    },
    header_buttons: {
        background: colors.test,
        margin: [1, 2],
        fontSize: [2, 3, 4],
        display: 'inline',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight: 'bold' as 'bold',
        ':hover': {
            color: colors.test,
        },
    },
}