import { createStore } from "redux";
import {languageReducer} from "./language/LanguageReducer";

// 负责保存数据，数据处理在reducer中
const store = createStore(languageReducer)

export default store;