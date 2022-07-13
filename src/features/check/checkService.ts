import { InformationToSend } from "./models/InformationToSend";

export async function sendInformation(informationToSend: InformationToSend) {
    const response = await fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(informationToSend)
    });

    return response;
}