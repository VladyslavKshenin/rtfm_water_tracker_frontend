import Icons from './../../images/icons.svg';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'store/settings/settingsOperations';
import css from "./UploadImage.module.css";
import avatarDefault from 'images/avatarDefault.png'

const UploadImage = () => {
  const usersInformation = useSelector(selectUser)
  const { avatarURL } = usersInformation;
  const dispatch = useDispatch();

  const handleChange = event => {
    const formData = new FormData();
    if (event.target.files.length <= 0) {
      return;
    }
    formData.append('avatar', event.target.files[0]);
    dispatch(updateAvatar(formData));
  };
  console.log(usersInformation);

  return (
    <>
      <h3 className = {css.title}>Your photo</h3>
      <div className = {css.upload_wrapper}>
        <img className = {css.avatar} id="avatar" alt='User avatar' src={avatarURL?avatarURL:avatarDefault} />
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