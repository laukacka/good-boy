import { useDispatch } from "react-redux";
import { setShelters } from "../state/shelterSlice";

export function useFetchShelters() {
  const dispatch = useDispatch();

  fetch('https://frontend-assignment-api.goodrequest.dev/api/v1/shelters')
    .then(res => res.json())
    .then(
      (result) => {
        dispatch(setShelters(result.shelters));
      },
      (error) => {
        console.log(error)
      }
    )
}