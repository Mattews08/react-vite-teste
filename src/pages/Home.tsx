import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { fetchMenu } from "../features/menu/menuSlice";
import MenuItem from "../components/MenuItem";
import Cart from "../components/Cart";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.menu.items);
  const menuStatus = useSelector((state: RootState) => state.menu.status);
  const error = useSelector((state: RootState) => state.menu.error);

  useEffect(() => {
    if (menuStatus === "idle") {
      dispatch(fetchMenu());
    }
  }, [menuStatus, dispatch]);

  let content;

  if (menuStatus === "loading") {
    content = <p>{t("loading")}</p>;
  } else if (menuStatus === "succeeded") {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    );
  } else if (menuStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-4">{t("welcome")}</h1>
      <h2 className="text-2xl mb-4">{t("menu")}</h2>
      {content}
      <h2 className="text-2xl mb-4">{t("cart")}</h2>
      <Cart />
    </div>
  );
};

export default Home;
