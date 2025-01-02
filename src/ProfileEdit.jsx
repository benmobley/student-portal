export function ProfileEdit({ onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>edit profile information</div>
      <button type="submit">Update</button>
    </form>
  );
}
