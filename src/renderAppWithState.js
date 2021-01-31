import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import Main from "./views/Main/Main";
import store from "./Store";

export default function renderAppWithState(state) {
  const wrapper = mount(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  return [store, wrapper];
}
