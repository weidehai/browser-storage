import {generator} from "../src/cookie/add"

test("cookie generator",()=>{
  expect(generator("weidehai",'123')).toBe("weidehai=123");
})

