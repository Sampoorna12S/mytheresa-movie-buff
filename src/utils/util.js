import { useSelector } from "react-redux";

export function getRefinedData(data) {
  data.map((item) => {
    item.imageUrl =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisaFRkrKystKysrNystLSsrKysrNy03Ky0rKystKysrKy03KysrLSsrNysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAHhABAQACAQUBAAAAAAAAAAAAAAERMSEDElGR0QL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoICggoCAAAAAAAAAAAAAAAAAAAAAAAAAAAoIAAAAAAsq/ic/eEBu9S2Scds1MSZ3vzu+2KGUURRUQVAAUEFQAAAVAAUEAAAAAAAAAAAAFQAAAAAAAgAAAAAKgAAAACiAAAAAKgAAAAAAAAAAAAAAAogAAAAAuUAAABUABQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYgAAAAAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFsEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==";
  });
  return data;
}

export function getElementById(id) {
  const genereData = useSelector((state) => state.generes);

  return genereData.find(({ id: elementId }) => {
    return elementId == id;
  });
}

export function getClassName() {
  const randomNumber = Math.floor(Math.random() * 6);

  switch (randomNumber) {
    case 1:
      return "styleOne";
    case 2:
      return "styleTwo";
    case 3:
      return "styleThree";
    case 4:
      return "styleFour";
    case 5:
      return "styleFive";
    case 6:
      return "styleSix";
    default:
      return "styleThree";
  }
}
