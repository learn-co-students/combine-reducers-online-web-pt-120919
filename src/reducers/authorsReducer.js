import uuid from "uuid";
export default function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "ADD_BOOK":
      let existingAuthor = state.filter(
        author => author.AuthorName === action.book.AuthorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { AuthorName: action.book.AuthorName, id: uuid() }];
      }

    default:
      return state;
  }
}
