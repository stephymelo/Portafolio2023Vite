import { useNavigate } from 'react-router';
import { useIdParam } from './useIdParams';

export const useGetElemByIdParam = <T>(list: T[]) => {
  const id = useIdParam();
  const navigate = useNavigate();
  const elem = list.find((elem: any) => {
    if(elem.id === id) {
      return true;
    } else {
      return false;
    }
  });

  if(!elem) {
    navigate('/404');
  }

  return elem;
}