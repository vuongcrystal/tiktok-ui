import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              console.log(item.children);
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      offset={[12, 8]}
      delay={[0, 700]}
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx('menu-body')}> {renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );

  
}
Menu.propTypes ={
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
}
export default Menu;
