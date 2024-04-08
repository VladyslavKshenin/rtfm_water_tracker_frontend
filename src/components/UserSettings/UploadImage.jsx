import Icons from './../../images/icons.svg';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/authSelectors';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'store/settings/settingsOperations';
import css from "./UploadImage.module.css";

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
      <h3 classname = {css.title}>Your photo</h3>
      <div classname = {css.upload_wrapper}>
        <img classname = {css.avatar} id="avatar" alt='User avatar' src={avatarURL} />
        <label classname = {css.upload}>
          <input
            name="photo"
            type="file"
            onChange={handleChange}
            id="upload"
            accept="image/*"
            style={{ display: 'none' }}
          />
          <svg aria-label="upload picture">
            <use href={Icons + '#download'}></use>
          </svg>
          <p>Upload a photo</p>
        </label>
      </div>
    </>
  );
};

export default UploadImage;