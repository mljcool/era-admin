import { useState } from 'react';

export const useForm = (initialState) => {
    const [values, setvalues] = useState(initialState);
    return [
        values,
        (e) => {
            setvalues({
                ...values,
                [e.target.name]: e.target.value,
            });
        },
    ];
};
