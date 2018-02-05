import expect from 'expect';
import {updateThemeColor} from './themeActionCreators';
import themeReducer from './themeReducer';

describe('themeReducer', () => {

  function stateBefore() {
    return {
      color: '#A3BE89'
    };
  }

//   const action = {
//       type: 'UPDATE_THEME_COLOR',
//       payload: {
//           color: '#B38EAE'
//       }
//   }

  it('should change the theme color', () => {
    const action = updateThemeColor({
      color: '#B38EAE'
    });
    const actual = themeReducer(stateBefore(), action);
    const expected = {
      color: '#B38EAE'
    };
    expect(actual).toEqual(expected);
  });
});
