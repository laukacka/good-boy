import { createUseStyles } from 'react-jss';
import { useWindowWidth } from '../useWindowWidth';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HelpType from '../features/shelterSelect/ShelterSelect';
import Information from '../features/information/Information';
import Check from '../features/check/Check';


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

function Main() {
    const styles = useStyles();
    const windowWidth = useWindowWidth();

    return (
        <header className='main'>
            <div className={'container'} style={{
                padding: `0.4rem ${windowWidth < 576 ? '2rem' : '5rem'}`,
                // marginTop: '38px',
                // marginBottom: '195px',
                minHeight: '40rem',
                paddingTop: '2rem',
                // overflow: 'auto',
                paddingLeft: '7rem',
                paddingRight: '7rem'
            }}>
                <div className="row">
                    <div className="col-9">
                        <BrowserRouter>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="">1</Link></li>
                                    <li className="breadcrumb-item"><Link to="information">2</Link></li>
                                    <li className="breadcrumb-item"><Link to="check">3</Link></li>
                                </ol>
                            </nav>
                            <Routes>
                                <Route path="/" element={<HelpType />} />
                                <Route path="/information" element={<Information />} />
                                <Route path="/check" element={<Check />} />
                            </Routes>
                        </BrowserRouter>

                    </div>
                    <div className="col-3 text-end" >
                        <img alt='' src='../../dog.png' style={{ height: '35rem' }} />
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Main;
