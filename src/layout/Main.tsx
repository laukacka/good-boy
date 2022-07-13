import { useWindowWidth } from '../useWindowWidth';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Information from '../features/information/InformationPage';
import Check from '../features/check/CheckPage';
import Shelter from '../features/shelter/ShelterPage';

function Main() {
    const windowWidth = useWindowWidth();

    return (
        <header className='main' style={{ paddingTop: '2rem' }}>
            <div className='container' style={{
                padding: `0.4rem ${windowWidth < 576 ? '2rem' : '5rem'}`,
                minHeight: '40rem',
                paddingLeft: '7rem',
                paddingRight: '7rem'
            }}>
                <div className="row">
                    <div className="col-12 col-md-9 col-lg-8 col-xl-8">
                        <BrowserRouter>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="">1</Link></li>
                                    <li className="breadcrumb-item"><Link to="information">2</Link></li>
                                    <li className="breadcrumb-item"><Link to="check">3</Link></li>
                                </ol>
                            </nav>
                            <Routes>
                                <Route path="/" element={<Shelter />} />
                                <Route path="/information" element={<Information />} />
                                <Route path="/check" element={<Check />} />
                            </Routes>
                        </BrowserRouter>

                    </div>
                    <div className="col-12 col-md-3 col-lg-4 col-xl-4 text-end" >
                        <img alt='' src='../../dog.png' style={{ height: '35rem' }} />
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Main;
