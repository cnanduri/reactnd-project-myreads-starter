/**
 * Created by Chaitanya on 9/24/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'

const readOptions = [
    {
        key : 'currentlyReading',
        value : 'Currently Reading'
    },
    {
        key : 'wantToRead',
        value : 'Want to Read'
    },
    {
        key : 'read',
        value : 'Read'
    },
    {
        key : 'none',
        value : 'None'
    }
];

class BookShelf extends Component {

    static propTypes = {
        bookShelfKey : PropTypes.string.isRequired,
        books : PropTypes.array.isRequired
    }

    render() {

        const {bookShelfKey, books} = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">
                    {readOptions.filter(option => option.key === bookShelfKey)
                                .map(option => option.value)}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(book => book.shelf === bookShelfKey)
                            .map(book => (
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div className="book-cover" style={{ width: 128, height: 193,
                                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                            }}></div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="none" disabled>Move to...</option>
                                                    {readOptions.map((option) => (
                                                        <option key={option.key} value={option.key}>{option.value}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">
                                            <ol className="authors-grid">
                                                {book.authors.map((author) => (
                                                    <li key={author}>{author}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;