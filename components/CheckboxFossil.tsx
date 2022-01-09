import { ComponentPropsWithRef, forwardRef, useState } from "react";

type Props = ComponentPropsWithRef<"input">;
type Ref = HTMLInputElement;

const CheckboxFossil = forwardRef<Ref, Props>(
  (
    { name, value, onChange, defaultChecked = false, ...otherProps },
    forwardedRef,
  ) => {
    const [checked, setChecked] = useState(defaultChecked);

    return (
      <div onClick={() => setChecked(!checked)} style={{ cursor: "pointer" }}>
        <input
          {...otherProps}
          style={{ display: "none" }}
          ref={forwardedRef}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={e => {
            setChecked(e.target.checked);
          }}
        />
        {checked ? "Omg im selected" : "nope I'm not selected"}
      </div>
    );
  },
);

CheckboxFossil.displayName = "CheckboxFossil";

export default CheckboxFossil;
