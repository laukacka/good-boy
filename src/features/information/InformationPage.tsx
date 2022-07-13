import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Information } from './models/Information';
import { setInformation } from './state/informationSlice';

const useStyles = createUseStyles({
    header: {
        fontWeight: 'bold',
        marginBottom: '1.5rem'
    }
});

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

const validateEmail = (email) => {
    return email
        .toLowerCase()
        .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        );
};

function InformationPage() {
    const styles = useStyles();
    const navigate = useNavigate();
    const [localInformation, setLocalInformation] = useState<Information>(useSelector((state: any) => state.information.information));
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const form = document.getElementById('informationForm');
        if (form) {
            form.addEventListener('submit', event => {
                if (!(form as any).checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        }

        if (!isBlank(localInformation.firstName) && !isBlank(localInformation.lastName) && !isBlank(localInformation.email)) {
            if (validateEmail(localInformation.email)) {
                dispatch(setInformation(localInformation));
                navigate('/check');
            } else {
                return;
            }

        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLocalInformation({ ...localInformation, [name]: value });
    };

    return (
        <>
            <h2 className={styles.header}>Potrebujeme od Vás zopár informácií</h2>
            <div className='container'>
                <form id='informationForm' className='row needs-validation' noValidate>
                    <div className='col'>
                        <label className="form-label fw-bold">O vás</label>
                        <div className="mb-3">
                            <label className='mb-1' htmlFor="firstName">Meno</label>
                            <input
                                required
                                type="text"
                                minLength={2}
                                maxLength={20}
                                className="form-control"
                                id='firstName'
                                name='firstName'
                                placeholder="Zadajte svoje meno"
                                value={localInformation.firstName}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">Prosím vyplňte toto pole.</div>
                        </div>
                        <div className="mb-3">
                            <label className='mb-1' htmlFor="lastName">Priezvisko</label>
                            <input
                                required
                                type="text"
                                minLength={2}
                                maxLength={30}
                                className="form-control"
                                id='lastName'
                                name='lastName'
                                placeholder="Zadajte svoje priezvisko"
                                value={localInformation.lastName}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">Prosím vyplňte toto pole.</div>
                        </div>
                        <div className="mb-3">
                            <label className='mb-1' htmlFor="email">E-mailová adresa</label>
                            <input
                                required
                                type="email"
                                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                                className="form-control"
                                id='email'
                                name='email'
                                placeholder="Zadajte svoj e-mail"
                                value={localInformation.email}
                                onChange={handleChange}
                            />
                            <div className="invalid-feedback">Prosím zadajte správny formát.</div>
                        </div>
                        <div className="mb-3">
                            <label className='mb-1' htmlFor="phoneNumber">Telefónne číslo</label>
                            <PhoneInput
                                country={'sk'}
                                onlyCountries={['sk', 'cz']}
                                value={localInformation.phone}

                                onChange={phone => setLocalInformation({ ...localInformation, phone })}
                            />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col text-end' style={{ marginTop: '3rem' }}>
                            <div className="hstack gap-3">
                                <button onClick={() => navigate('/')} type="button" className="btn" style={{ backgroundColor: '#ffddcc', color: 'black' }}>Späť</button>
                                <button type="submit" onClick={(e) => handleSubmit()} className="btn ms-auto" style={{ backgroundColor: '#8c8c8c', color: 'white' }}>Pokračovať</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default InformationPage;
