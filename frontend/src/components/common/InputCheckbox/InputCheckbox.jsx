export const InputCheckbox = ({ checked, text, isEditing, onChange, id }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={({ target }) => onChange(target.id, target.checked)}
        readOnly={!isEditing}
        id={id}
      />
      {text}
    </div>
  );
};
