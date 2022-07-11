import { BaseSyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShelterInfo } from './state/shelterSlice';
import { useNavigate } from 'react-router-dom';

function HelpType() {
    const [wholeFoundation, setWholeFoundation] = useState(false);
    const sums = [5, 10, 20, 30, 50, 100];
    const [priceToHelp, setPriceToHelp] = useState<number | undefined>();
    const [shelter, setShelter] = useState<string | undefined>();
    const shelters = useSelector((state: any) => state.shelters); //TODO
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePersonalSumToHelp = (e: BaseSyntheticEvent) => {
        setPriceToHelp(e.target.value);
    }

    const handleSelectWholeFoundation = () => {
        setWholeFoundation(true);
        const selectShelter = document.getElementById('selectShelter');

        if (selectShelter) (selectShelter as any).value = undefined;
    }

    const onContinue = () => {
        if (!priceToHelp) {
            console.log('price not set');
            return;
        }

        dispatch(setShelterInfo({ selectedShelter: wholeFoundation === true ? undefined : shelter, value: priceToHelp }));
        navigate('/information');
    }

    return (
        <>
            <h2 style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>Vyberte si možnosť, ako chcete pomôcť</h2>
            <div className='container'>
                <div className="row" style={{ marginBottom: '1.5rem' }}>
                    <div className="col-sm-6" style={{ padding: 0 }}>
                        <div onClick={() => setWholeFoundation(false)} className="card btn" style={{
                            borderColor: '#cc7a00',
                            backgroundColor: wholeFoundation ? 'white' : '#cc7a00',
                            height: '9rem',
                            color: wholeFoundation ? 'black' : 'white',
                        }}
                        >
                            <h5 className="card-title">TODO</h5>
                            <p className="card-text">Chcem finančne prispieť konkrétnemu útulku</p>
                        </div>
                    </div>
                    <div className="col-sm-6 align-middle" style={{ padding: 0 }}>
                        <div onClick={() => handleSelectWholeFoundation()} className="card btn" style={{
                            borderColor: '#cc7a00',
                            height: '9rem',
                            backgroundColor: wholeFoundation ? '#cc7a00' : 'white',
                            color: wholeFoundation ? 'white' : 'black',
                        }}
                        >
                            <h5 className="card-title">TODO</h5>
                            <p className="card-text">Chcem finančne prispieť celej nadácii</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className='row form-floating need-validation'>
                    <div className='col'>
                        <label htmlFor="selectShelter" className="form-label fw-bold">O projekte</label>
                        <div className="mb-3 form-floating">
                            <select disabled={wholeFoundation} id='selectShelter'
                                onChange={(e) => setShelter(e.target.value)}
                                required={!wholeFoundation}
                                className="form-select form-control"
                            >
                                <option ></option>
                                {Array.from(shelters.shelters).map((shelter: any) => {
                                    return <option key={shelter.id} value={shelter.id}>{shelter.name}</option>
                                })}
                            </select>
                            <label htmlFor="selectShelter" className="form-label">Útulok</label>
                        </div>
                        <label htmlFor="selectShelter" className="form-label fw-bold">Suma, ktorou chcete prispieť</label>
                        <div >
                            {
                                sums.map(sum => {
                                    return <button
                                        key={sum}
                                        onClick={() => setPriceToHelp(sum)}
                                        type="button"
                                        className="btn"
                                        style={{ marginLeft: '0.5rem', paddingLeft: '0.7rem', border: '1px #a6a6a6 solid' }}>
                                        {sum} €
                                    </button>
                                })
                            }
                            <button type="button" className="btn" style={{
                                marginLeft: '0.5rem',
                                paddingLeft: '0.7rem',
                                border: '1px #a6a6a6 solid', maxHeight: '38px'
                            }}
                            >
                                <input onChange={handlePersonalSumToHelp} placeholder='______' className="btn" style={{ width: '60px', maxHeight: '38px', padding: 0 }} />
                                €
                            </button>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-end' style={{ marginTop: '3rem' }}>
                            <button onClick={() => onContinue()} type="submit" className="btn" style={{ backgroundColor: '#cc7a00', color: 'white' }}>Pokračovať</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default HelpType;
