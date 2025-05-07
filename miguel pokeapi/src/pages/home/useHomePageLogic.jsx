import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  fetchItems,
  fetchItemById,
  clearItems,
} from "../../store/items/itemsSlice";
export const useHomePageLogic = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.items.data);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);
  const [pokedata, setPokedata] = useState([]);

  useEffect(() => {
    setPokedata(data);
  }, [data]);

  const loadItems = () => {
    dispatch(fetchItems());
  };

  const loadItemById = (id) => {
    dispatch(fetchItemById(id));
  };

  const clear = () => {
    dispatch(clearItems());
  };

  return {
    data,
    status,
    error,
    loadItems,
    loadItemById,
    clear,
    pokedata,
  };
};