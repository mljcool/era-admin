import { useState } from 'react';

export const useForm = (initialState) => {
    const [values, setvalues] = useState(initialState);
    return [
        values,
        (e) => {
            e.preventDefault();
            setvalues({
                ...values,
                [e.target.name]: e.target.value,
            });
        },
    ];
};
