import { createUseStyles } from 'react-jss';
import { useWindowWidth } from '../useWindowWidth';

const useStyles = createUseStyles({
    header: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // width: '100%',
        // minHeight: '2rem',
        // textAlign: 'center',
        // backgroundColor: 'gray',
        // color: 'black'
    }
});

function Header() {
    const styles = useStyles();
    const windowWidth = useWindowWidth();

    return (
        <header className={'top ' + styles.header} style={{ borderBottom: '1px #e6e6e6 solid' }}>
            <div className={windowWidth < 576 ? 'container-fluid' : 'container'} style={{ padding: `0.4rem ${windowWidth < 576 ? '2rem' : '5rem'}` }}>
                <div className="row" style={{ color: '#999999' }}>
                    <div className="col-6">
                        <span > Nadácia Good Boy</span>
                    </div>
                    <div className="col-6 text-end" >
                        fb insta
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;
