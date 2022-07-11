import { useWindowWidth } from '../useWindowWidth'

function Footer() {
    const windowWidth = useWindowWidth();

    return (
        <footer className={'bottom'}>
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
