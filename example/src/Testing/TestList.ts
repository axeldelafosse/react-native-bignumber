import type { TestItemType } from '../navigators/children/Entry/TestItemType';
import { registerArythmeticTests } from './bn-tests/arithmetic-test.js';
import { BN } from 'react-native-bignumber';
import { describe, it } from './MochaRNAdapter';
import chai from 'chai';

export const TEST_LIST: Array<TestItemType> = [
  {
    description: 'SimpleTests',
    value: false,
    registrator: () => {
      describe('basic tests', () => {
        it('basic constructor and to String', () => {
          var a = new BN('10', 10);
          chai.expect(a.toString(10)).to.be.eql('10');
        });

        it('basic add', () => {
          var a = new BN('dead', 16);
          var b = new BN('101010', 2);

          var res = a.add(b);
          chai.expect(res.toString(10)).to.be.eql('57047');
        });

        it('basic add with negative num', () => {
          var a = new BN('5', 16);
          var b = new BN('-101010', 2);

          var res = a.add(b);
          chai.expect(res.toString(10)).to.be.eql('-37');
        });
      });
    },
  },
  {
    description: 'Arithmetic tests',
    value: false,
    registrator: registerArythmeticTests,
  },
];
