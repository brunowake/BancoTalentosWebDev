import React, { useState } from "react";

const RedeSocial = (props) => {
  const { state, handleChange } = props;
  const inputClassName = `col-lg-8 col-12 `;
  const labelClassName = `form-label  col-lg-4 col-12`;
  return (
    <div>
      <div>
        <label htmlFor="instagram" className={labelClassName}>
          Instagram:
        </label>
        <input
          id="instagram"
          type="text"
          name="instagram"
          className={inputClassName}
          value={state.instagram}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="facebook" className={labelClassName}>
          Facebook:
        </label>
        <input
          id="facebook"
          type="text"
          name="facebook"
          className={inputClassName}
          value={state.facebook}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="twitter" className={labelClassName}>
          Twitter:
        </label>
        <input
          id="twitter"
          type="text"
          name="twitter"
          className={inputClassName}
          value={state.twitter}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="linkedin" className={labelClassName}>
          Linkedin:
        </label>
        <input
          id="linkedin"
          type="text"
          name="linkedin"
          className={inputClassName}
          value={state.linkedin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="github" className={labelClassName}>
          Github:
        </label>
        <input
          id="github"
          type="text"
          name="github"
          className={inputClassName}
          value={state.github}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default RedeSocial;
