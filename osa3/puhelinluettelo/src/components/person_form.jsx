function PersonForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input id="name" />
      </div>
      <div>
        number: <input id="number" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
