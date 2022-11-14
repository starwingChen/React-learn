import i18n from 'i18next'
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionType } from "./languageActions";
// 负责处理数据
interface LanguageState {
  language: "zh" | "en";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: 'English', code: 'en' },
  ]
}

export const languageReducer =  (state = defaultState, action: LanguageActionType) => {
  switch (action.type) {
  // 收到指令时渲染更新的数据
    case CHANGE_LANGUAGE:
      i18n.changeLanguage(action.payload) //处理不标准，因为reducer必须是纯函数，而changelanguage有副作用
      return  { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return {
        ...state, 
        languageList:[...state.languageList, action.payload]
      }
  // 首次渲染默认数据
    default:
      return state
  }
};
