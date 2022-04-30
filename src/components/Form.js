const Form = () => (
  <form>
    <h1>ADD NEW BOOK</h1>
    <input className="Title" type="text" placeholder="Book Title" required />
    <select name="category">
      <option value="" hidden>
        Author
      </option>
      <option value="Agatha Christie">
        Agatha Cristie
      </option>
      <option value="Oscar Wilde">
        Oscar Wilde
      </option>
      <option value="Arthur Schoppenhauer">
        Arthur Schoppenhauer
      </option>
      <option value="Virginia Woolf">
        Virginia Woolf
      </option>
    </select>
    <button type="submit">ADD BOOK</button>

  </form>
);
export default Form;
