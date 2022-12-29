import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6709c6da43ef4429b97dff76ef893b7d~c5_300x300.webp?x-expires=1672369200&x-signature=Pgk3KWMyL3vxjf3pfgI0yr%2FK%2FKI%3D"
        alt="account 1"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Account name</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>@account1</span>
      </div>
    </div>
  );
}

export default AccountItem;
