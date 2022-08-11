import { useSelector } from "react-redux";

export function getRefinedData(data) {
  data = data.splice(0, 3);
  data.map((item) => {
    item.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR20Rpup3E5NzybJWLN0toybNyFsVHL3dXwxaeO-08XA-SJRM_iUbvRkoT72Bh_kXTGfQ&usqp=CAU';
  })
  return data;
}

export function getElementById(id) {
  const genereData = useSelector((state) => state.generes)

  return genereData.find(({ id: elementId}) => {
    return elementId == id
  })
}