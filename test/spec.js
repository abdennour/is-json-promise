import {
 IsJSON
} from '../src/safe';
import '../src';
import expect from 'expect';
import sinon from 'sinon';

describe(`IsJSON (safe)`, () => {

 it(`runs "then" if string is JSON`, () => {
  const target = JSON.stringify({
   firstname: "Ahlen",
   lastname: "Sahlen"
  });

  IsJSON(target).then(() => expect(true).toBeTruthy())
   .catch(() => expect(false).toBeTruthy());

 });

 it(`runs "catch" if not`, () => {
  const target = `I am here`;
  IsJSON(target).then(() => expect(false).toBeTruthy())
   .catch(() => expect(true).toBeTruthy());

 });
 it(`converts string to JSON object if it is`, () => {
  let anObject = {
   firstname: "Ahlen",
   lastname: "Sahlen"
  };
  const target = JSON.stringify(anObject);
  IsJSON(target).then((parsedObject) => expect(parsedObject).toEqual(anObject));
 })
})
