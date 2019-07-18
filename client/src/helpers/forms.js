import { useEffect, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "update": {
      return {
        ...state,
        values: {
          ...state.values,
          ...(action.payload.values ? action.payload.values : {})
        }
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    values: {}
  });

  const getValues = () => {
    return state.values;
  };

  return {
    values: state.values,
    getValues,
    dispatch
  };
};

export const useInput = ({ defaultValue, ...config }, form) => {
  const value = form.values[config.name] ? form.values[config.name] : "";

  useEffect(() => {
    form.dispatch({
      type: "update",
      payload: {
        values: {
          [config.name]: defaultValue ? defaultValue : value
        }
      }
    });
  }, [config.name, defaultValue]);

  const valueSetter = e => {
    let value;
    if (e.target !== undefined) {
      value = e.target.value;
    } else {
      value = e;
    }

    form.dispatch({
      type: "update",
      payload: {
        values: {
          [config.name]: value
        }
      }
    });
  };

  return {
    ...config,
    onChange: valueSetter,
    value: value
  };
};
