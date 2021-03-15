import { useHistory } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { BookForm, Container } from '../../shared';
import { addBook } from '../../api';

export const AddBook = () => {
    const history = useHistory();
    const queryClient = useQueryClient();
    const { mutateAsync, error, isError, isLoading } = useMutation(addBook);

    const onFormSubmit = (payload) => {
        console.log("payload in onFormSubmit in AddBook", payload);
        mutateAsync(payload);
        queryClient.invalidateQueries('books');
        history.push('/');
    }
    if(isLoading){
        return (
            <Container>
                Loading...
            </Container>
        )
    }
    if(isError){
        return (
            <Container>
                {error.message}
            </Container>
        )
    }
    return (
        <Container>
            <h2>Add book</h2>
            <BookForm onFormSubmit={onFormSubmit}/>
        </Container>
    )
}