import { createContext, useMemo, useReducer } from "react";
import appReducer from "reducers/app.reducer";

export const AppContext = createContext({
  loading: false,
  isAuth: false,
  user: undefined,
  order: {},
  setLoading: () => {},
  setUser: () => {},
  setOrder: () => {},
});
export const { reducer, defaultValue, TYPES } = appReducer;
export const AppProvider = ({ children }) => {
  const [reducerStates, dispatch] = useReducer(reducer, defaultValue);
  const { loading, isAuth, user, order } = reducerStates;
 
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
