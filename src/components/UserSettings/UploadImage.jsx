import Icons from './../../images/icons.svg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUserData } from 'store/settings/settingsOperations';
import css from "./UploadImage.module.css";
import avatarDefault from 'images/avatarDefault.png'
import { Notify } from 'notiflix';
import { userAvatarSelector } from 'store/settings/selector';
import { selectUser } from 'store/auth/authSelectors';

const UploadImage = () => {
  
  const dispatch = useDispatch();
  const avatarURL = useSelector(userAvatarSelector)
  const userInfo = useSelector(selectUser)
  const handleChange = event => {
    const formData = new FormData();
    if (event.target.files.length <= 0) {
      return;
    }
    formData.append('avatar', event.target.files[0]);
    dispatch(updateUserData(formData))
    .unwrap()
    .then(() => {
      Notify.success("Аватарка успішно додана");
    })
    .catch((error) => {
      Notify.failure("Something wrong!")
  })
  };
 
  return (
    <>
      <h3 className = {css.title}>Your photo</h3>
      <div className = {css.upload_wrapper}>
        <img className = {css.avatar} id="avatar" alt='User avatar' src={avatarURL ? avatarURL : userInfo && userInfo.avatarURL ? userInfo.avatarURL : avatarDefault} />
        <label className = {css.upload}>
          <input
            name="photo"
            type="file"
            onChange={handleChange}
            id="upload"
            accept="image/*"
            style={{ display: 'none' }}
          />
          <svg className={css.svg} aria-label="upload picture" width={16} height={16}>
            <use href={Icons + '#download'}></use>
          </svg>
          <span className={css.desc}>Upload a photo</span>
        </label>
      </div>
    </>
  );
};

export default UploadImage;