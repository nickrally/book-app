import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removeBook } from '../../api';

export const Book = ({author, title, id}) => {
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation(removeBook);

    const remove = async () => {
        await mutateAsync(id);
        queryClient.invalidateQueries('books');
    }
    return (
        <div>
            <Link to={`/update-book/${id}`}>
                {title}
            </Link>
            <p>{author}</p>
            <button onClick={remove}>Remove</button>
        </div>
    );
}