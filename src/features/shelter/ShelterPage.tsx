import { BaseSyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShelterInfo } from './state/shelterSlice';
import { useNavigate } from 'react-router-dom';

function ShelterPage() {
    const [wholeFoundation, setWholeFoundation] = useState(false);
    const sums = ['5', '10', '20', '30', '50', '100'];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const shelters = useSelector((state: any) => state.shelters);
    const [sumToHelp, setSumToHelp] = useState<string | undefined>(shelters.value);
    const [shelter, setShelter] = useState<number | undefined>(shelters.selectedShelter);


    const handlePersonalSumToHelp = (e: BaseSyntheticEvent) => {
        setSumToHelp(e.target.value);
    }

    const handleSelectWholeFoundation = () => {
        setWholeFoundation(true);
        setShelter(undefined);
    }

    const handleSubmit = () => {
        const form = document.getElementById('shelterForm');
        if (form) {
            form.addEventListener('submit', event => {
                if (!(form as any).checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        }

        if (!sumToHelp) {
            console.log('price not set'); //FIXME
            return;
        }

        dispatch(setShelterInfo({ selectedShelter: wholeFoundation === true ? undefined : shelter, value: sumToHelp }));
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
                <form id='shelterForm' className='row form-floating needs-validation' noValidate>
                    <div className='col'>
                        <label htmlFor="selectShelter" className="form-label fw-bold">O projekte</label>
                        <div className="mb-3 form-floating">
                            <select disabled={wholeFoundation} id='selectShelter'
                                onChange={(e) => setShelter(Number(e.target.value))}
                                required={!wholeFoundation}
                                value={shelter}
                                className="form-select form-control"
                            >
                                <option ></option>
                                {Array.from(shelters.shelters).map((shelter: any) => {
                                    return <option key={shelter.id} value={shelter.id}>{shelter.name}</option>
                                })}
                            </select>
                            <label htmlFor="selectShelter" className="form-label">Útulok</label>
                            <div className="invalid-feedback">
                                Prosím vyplňte toto pole.
                            </div>
                        </div>
                        <label htmlFor="selectShelter" className="form-label fw-bold">Suma, ktorou chcete prispieť</label>
                        <div >
                            {
                                sums.map(sum => {
                                    return <>
                                        <input
                                            key={sum}
                                            type="radio"
                                            className="btn-check"
                                            name="options"
                                            id={'sum' + sum}
                                            autoComplete="off"
                                            required
                                            value={sum}
                                            onClick={() => setSumToHelp(sum)}
                                            defaultChecked={sumToHelp === sum}
                                        />
                                        <label
                                            style={{
                                                backgroundColor: sumToHelp === sum ? '#cc7a00' : 'white',
                                                color: sumToHelp === sum ? 'white' : 'black',
                                                marginLeft: '0.5rem',
                                                paddingLeft: '0.7rem',
                                                border: '1px #a6a6a6 solid'
                                            }}
                                            className="btn"
                                            htmlFor={'sum' + sum}
                                        >
                                            {sum}
                                        </label>
                                    </>
                                })
                            }
                            <button
                                type='button'
                                className="btn"
                                style={{
                                    marginLeft: '0.5rem',
                                    paddingLeft: '0.7rem',
                                    border: '1px #a6a6a6 solid',
                                    maxHeight: '38px',
                                    backgroundColor: (!sums.find(sum => sum === sumToHelp) && sumToHelp) ? '#cc7a00' : 'white',
                                    color: (!sums.find(sum => sum === sumToHelp) && sumToHelp) ? 'white' : 'black'
                                }}
                            >
                                <input
                                    onChange={handlePersonalSumToHelp}
                                    placeholder='______'
                                    className="btn"
                                    style={{
                                        width: '60px',
                                        maxHeight: '38px',
                                        padding: 0,
                                        color: !sums.find(sum => sum === sumToHelp) ? 'white' : 'black',
                                    }}
                                />
                                €
                            </button>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-end' style={{ marginTop: '3rem' }}>
                            <button onClick={() => handleSubmit()} type="submit" className="btn" style={{ backgroundColor: '#cc7a00', color: 'white' }}>Pokračovať</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="toast-container position-fixed top-0 end-0 p-3">
                <div id="errorToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="" />
                        <strong className="me-auto"></strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Prosím vás vyberte výšku príspevku.
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShelterPage;
