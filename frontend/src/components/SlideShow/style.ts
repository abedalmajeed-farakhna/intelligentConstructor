import { makeStyles } from '@mui/styles'


const useStyle = makeStyles((theme) => ({
    box: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem'
    },
    img: {
        width: '100%',
        height: '30vh',
        objectFit: 'cover',
    }
}));

export default useStyle