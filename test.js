import { GenderGuesser } from "./GenderGuesser";
import { AttendanceList } from "./AttendanceList";

describe('Test for GenderGuesser API', () => {
  let name;
  beforeAll(() => {
    name = new GenderGuesser();
  });
  test('erik call', () => {
    name.getGuess('erik').then(result => {
      expect(result).resolves;
    });
  });
  test('it should return a value', () => {
    name.getGuess('balazs').then(result => {
        expect(result).not.toBe(null);
    });
  });
  test('nandi is male', () => {
    name.getGuess('nandi').then(result => {
        expect(result).arrayContaining('male');
    });
  });
});
describe('test attendance list',()=>{

    let list;
    beforeAll(()=>{
         list= new attendancelist();
    });

    test('list return value ',()=>{
        expect(list.add('tomi')).not.toBeNull();

    });




})