import { InformationToSend } from "./models/InformationToSend";

export function sendInformation(informationToSend: InformationToSend) {
    console.log(JSON.stringify(informationToSend))
    fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute', { method: 'POST', body: JSON.stringify(informationToSend) })
        .then(res => res.json())
        .then(
            (result) => {
                return result;
            },
            (error) => {
                console.log(error);
                return error;
            }
        )
}