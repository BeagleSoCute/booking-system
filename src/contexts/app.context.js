import { createContext, useMemo, useReducer, useEffect } from "react";
import appReducer from "reducers/app.reducer";
import { checkIsAuth } from "helpers/auth.helper";
import { getMyData } from "services/user.service";
export const AppContext = createContext({
  loading: false,
  isAuth: false,
  user: {},
  order: {},
  setLoading: () => {},
  setUser: () => {},
  setOrder: () => {},
});
export const { reducer, defaultValue, TYPES } = appReducer;
export const AppProvider = ({ children }) => {
  const [reducerStates, dispatch] = useReducer(reducer, defaultValue);
  const { loading, isAuth, user, order } = reducerStates;
  useEffect(() => {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const resCheckAuth = checkIsAuth();
    const init = async () => {
      const { success, userData } = await getMyData();
      if (success) {
        dispatch({ type: TYPES.SET_USER, payload: userData });
      }
    };
    if (resCheckAuth) {
      init();
    }
    dispatch({ type: TYPES.SET_LOADING, payload: false });
  }, []);

  const appContextValue = useMemo(() => {
    return {
      loading,
      isAuth,
      user,
      order,
      setLoading: (data) => {
        dispatch({ type: TYPES.SET_LOADING, payload: data });
      },
      setUser: (data) => {
        dispatch({ type: TYPES.SET_USER, payload: data });
      },
      setOrder: (data) => {
        dispatch({ type: TYPES.SET_ORDER, payload: data });
      },
    };
    // eslint-disable-next-line
  }, [isAuth, user, order, dispatch]);
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
