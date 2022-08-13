import { useSelector } from "react-redux";

export function getRefinedData(data) {
  // data = data.splice(0, 3);
  data.map((item) => {
    item.imageUrl =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisaFRkrKystKysrNystLSsrKysrNy03Ky0rKystKysrKy03KysrLSsrNysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAHhABAQACAQUBAAAAAAAAAAAAAAERMSEDElGR0QL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoICggoCAAAAAAAAAAAAAAAAAAAAAAAAAAAoIAAAAAAsq/ic/eEBu9S2Scds1MSZ3vzu+2KGUURRUQVAAUEFQAAAVAAUEAAAAAAAAAAAAFQAAAAAAAgAAAAAKgAAAACiAAAAAKgAAAAAAAAAAAAAAAogAAAAAuUAAABUABQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYgAAAAAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFsEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==";
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR20Rpup3E5NzybJWLN0toybNyFsVHL3dXwxaeO-08XA-SJRM_iUbvRkoT72Bh_kXTGfQ&usqp=CAU";
  });
  return data;
}

export function getElementById(id) {
  const genereData = useSelector((state) => state.generes);

  return genereData.find(({ id: elementId }) => {
    return elementId == id;
  });
}
