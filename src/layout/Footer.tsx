import { createUseStyles } from 'react-jss';
import { useWindowWidth } from '../useWindowWidth'

const useStyles = createUseStyles({
    footer: {
        // width: '100%',
        // height: '13rem',
        // backgroundColor: 'red',
        // borderTop: '1px black solid'
        // position: 'absolute',
        // bottom: 0
    }
});

function Footer() {
    const styles = useStyles();
    const windowWidth = useWindowWidth();
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     function handleWindowResize() {
    //         setWindowWidth(window.innerWidth);
    //     }

    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     };
    // }, []);

    return (
        <footer className={'bottom ' + styles.footer}>
            <div className="container" style={{ borderTop: '1px #d9d9d9 solid' }}>
                <div className="row" style={{ paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <img alt='' src='../../logo.png' />
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3" style={{ paddingTop: windowWidth < 576 ? '1rem' : 0 }}>
                        <h6>
                            Nadácia Good boy
                        </h6>
                        <div>
                            O projekte
                        </div>
                        <div>
                            Ako na to
                        </div>
                        <div>
                            Kontakt
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3" style={{ paddingTop: windowWidth < 992 ? '1rem' : 0 }}>
                        <h6>
                            Nadácia Good boy
                        </h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3" style={{ paddingTop: windowWidth < 992 ? '1rem' : 0 }}>
                        <h6>
                            Nadácia Good boy
                        </h6>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
