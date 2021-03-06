import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Information } from '../information/models/Information';
import { ShelterState } from '../shelter/state/shelterSlice';
import { sendInformation } from '../check/checkService';
import { InformationToSend } from './models/InformationToSend';
import { Toast } from 'bootstrap';

const useStyles = createUseStyles({
    h6: {
        marginTop: '1rem',
        marginBottom: '0.2rem'
    }
});

function CheckPage() {
    const { h6 } = useStyles();
    const navigate = useNavigate();
    const information: Information = useSelector((state: any) => state.information.information);
    const shelterInfo: ShelterState = useSelector((state: any) => state.shelters);
    const shelter = shelterInfo.shelters.find(shelter => shelter.id === shelterInfo.selectedShelter);

    const shelterText = shelterInfo.selectedShelter ? (
        <>
            <h6 className={h6}>Najviac mi záleží na útulku</h6>
            <span>
                {
                    shelter?.name ?? 'Chcem finančne prispieť celej organizácii'
                }
            </span>
        </>
    ) : undefined;

    const handleSubmit = (e) => {
        const form = document.getElementById('checkForm');
        if (form) {
            form.addEventListener('submit', event => {
                if (!(form as any).checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        }

        const informationToSend: InformationToSend = {
            firstName: information.firstName,
            lastName: information.lastName,
            email: information.email,
            phone: information.phone ?? undefined,
            value: shelterInfo.value,
            shelterID: shelterInfo.selectedShelter ?? undefined
        }
        console.log(informationToSend)

        if ((document.getElementById('confirmation') as any).checked) {
            sendInformation(informationToSend).then(response => {
                let toastEl: HTMLElement | null;

                if (response.status === 200) {
                    toastEl = document.getElementById('successToast');
                } else {
                    toastEl = document.getElementById('errorToast');
                }

                const bsToast = new Toast(toastEl);
                bsToast.show();
            });
        }
        e.preventDefault();
    }

    return (
        <>
            <h2 style={{ fontWeight: 'bold', marginBottom: '1.5rem' }}>Skontrolujte si zadané údaje</h2>
            <div className='container'>
                <h6>Akou formou chcem pomôcť</h6>
                <span>{shelter?.name ?
                    'Chcem finančne prispieť konkrétnemu útulku' : 'Chcem finančne prispieť celej organizácii'}</span>
                {shelterText ?? shelterText}
                <h6 className={h6}>Suma ktorou chcem pomôcť</h6>
                <span>{shelterInfo.value}</span>
                <h6 style={{ marginTop: '1rem' }}>Meno a priezvisko</h6>
                <span>{information.firstName + ' ' + information.lastName}</span>
                <h6 className={h6}>E-mailová adresa</h6>
                <span>{information.email}</span>
                {
                    information.phone ? <>
                        <h6 className={h6}>Telefónne číslo</h6>
                        <span>{information.phone}</span>
                    </> : undefined
                }
                <form id='checkForm' className="row g-3 needs-validation" noValidate style={{ marginTop: '0.5rem' }}>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="confirmation" required />
                            <label className="form-check-label" htmlFor="confirmation">
                                Súhlasím so spracovaním mojich osobných údajov
                            </label>
                            <div className="invalid-feedback">
                                Prosím potvrďte váš súhlas.
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-end' style={{ marginTop: '3rem' }}>
                            <div className="hstack gap-3">
                                <button onClick={() => navigate('/information')} type="button" className="btn" style={{ backgroundColor: '#ffddcc', color: 'black' }}>Späť</button>
                                <button type="submit" onClick={(e) => handleSubmit(e)} className="btn ms-auto" style={{ backgroundColor: '#8c8c8c', color: 'white' }}>Odoslať formulár</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="toast-container position-fixed top-0 end-0 p-3">
                <div id="errorToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="" />
                        <strong className="me-auto">Odoslanie zlyhalo</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Váš príspevok sa nepodarilo odoslať. Skúste to neskôr prosím.
                    </div>
                </div>
            </div>
            <div className="toast-container position-fixed top-0 end-0 p-3">
                <div id="successToast" className="toast" role="status" aria-live="polite" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="" />
                        <strong className="me-auto">Odoslanie úspešné</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Váš príspevok bol úspešne odoslaný.
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckPage;
