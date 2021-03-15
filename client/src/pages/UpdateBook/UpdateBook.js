import { useParams, useHistory } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { BookForm, Container } from '../../shared';
import { getBook, updateBook } from '../../api';

export const UpdateBook = () => {
    const { id } = useParams();
    const history = useHistory();
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation(updateBook);

    const { data, error, isLoading, isError } = useQuery(
        ['book', { id }], 
        getBook
    );

    const onFormSubmit = async (payload) => {
        await mutateAsync({...payload, id});
        queryClient.invalidateQueries('book');
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
        return(
            <Container>
                {error.message}
            </Container>
        )
    }
    return (
        <Container>
            <h2>Update book</h2>
            <BookForm onFormSubmit={onFormSubmit} defaultData={data} />
        </Container>
    )
}