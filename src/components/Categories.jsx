// по снипету сразу создаем готовый функциональный компонент по всем нромам
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  // const [activeItem, setactiveItem] = React.useState(null);

  // const onSelectItem = (index) => {
  //   // setactiveItem(index);
  //   onClickCategory(index);
  // };

  console.log('RERENDER CATEGORIES');

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [], onClickItem: [] };

export default Categories;
